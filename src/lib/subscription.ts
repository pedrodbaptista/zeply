import config, { ENV } from "../config/config";
import actions from "../redux/reducers/actions";
import {
  ISubscription,
  UserState,
} from "../redux/reducers/userReducer/userModel";
import { getUserSubscription } from "../utils/helper";

const createSubscription = (
  user: UserState,
  newSubscription: ISubscription
) => {
  const subscribeToTransaction = (subscription: ISubscription) => {
    const socket = new WebSocket(config[ENV as keyof typeof config].WS_URL);

    socket.onopen = () => {
      console.log("WebSocket connection established.");
      const subscribeMsg = JSON.stringify({
        op: "unconfirmed_sub",
      });
      socket.send(subscribeMsg);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log("ws updated - transaction", event);
      if (message.event === "tx") {
        actions.user.updateSubscription({ ...subscription, status: "updated" });
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    return () => {
      socket.close();
    };
  };
  const subscribeToAddress = (subscription: ISubscription) => {
    const socket = new WebSocket(config[ENV as keyof typeof config].WS_URL);

    socket.onopen = () => {
      console.log("WebSocket connection established for address.");
      const subscribeMsg = JSON.stringify({
        op: "addr_sub",
        addr: newSubscription.hash,
      });
      socket.send(subscribeMsg);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.event === "tx") {
        actions.user.updateSubscription({ ...subscription, status: "updated" });
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };

    return () => {
      actions.user.updateSubscription({ ...subscription, status: "end" });
      socket.close();
    };
  };

  const userSubscription = getUserSubscription(user, newSubscription.hash);
  if (!userSubscription) {
    if (newSubscription.type === "TRANSACTIOM") {
      subscribeToTransaction(newSubscription);
    }
    if (newSubscription.type === "ADDRESS") {
      subscribeToAddress(newSubscription);
    }
    actions.user.setSubscription(newSubscription);
  }
  setTimeout(() => {
    actions.user.updateSubscription({ ...newSubscription, status: "updated" });
    console.log("updated event in socket!!!");
  }, 5000);
};

export default createSubscription;
