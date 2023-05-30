import React, { useEffect, useState } from "react";
import { IAddress } from "../../types/address";
import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import actions from "../../redux/reducers/actions";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/rootReducer";
import { ISubscription } from "../../redux/reducers/userReducer/userModel";
import createSubscription from "../../lib/subscription";
import {
  exchangeRate,
  getExampleAddress,
  getUserSubscription,
  mapAddressToIAddress,
} from "../../utils/helper";
import config, { ENV, MOCK_DATA } from "../../config/config";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IProps {
  data?: IAddress;
}

function AddressInfo(props: IProps) {
  const state = useSelector((state: State) => state);
  const [data, setData] = useState(props.data || ({} as IAddress));

  let { addressId } = useParams();

  useEffect(() => {
    if (addressId) {
      getData();
    }
  }, [addressId]);

  const getData = async () => {
    if (MOCK_DATA) {
      const addressResponse = getExampleAddress(true);
      setData(addressResponse);
    } else {
      if (!addressId) {
        return;
      }
      const addrResponse = await axios.get(
        `${
          config[ENV as keyof typeof config].BLOCKCHAIN_URL
        }/rawaddr/${addressId}`
      );
      if (addrResponse.data) {
        const newData = mapAddressToIAddress(addrResponse.data);
        const unspentResponse = await axios.get(
          `${
            config[ENV as keyof typeof config].BLOCKCHAIN_URL
          }/unspent?active=${addressId}`
        );
        if (unspentResponse.data) {
          const unspent = unspentResponse.data.unspent_outputs.reduce(
            (acc: any, s: any) => acc + Number(s.value),
            0
          );
          newData.total_unspent = unspent;
        }
        const balanceResponse = await axios.get(
          `${
            config[ENV as keyof typeof config].BLOCKCHAIN_URL
          }/balance?active=${addressId}`
        );
        if (balanceResponse.data) {
          newData.final_balance = balanceResponse.data[addressId]
            .final_balance as number;
        }
        setData(newData);
      }
    }
  };

  const subscribe = () => {
    const newSubscription: ISubscription = {
      type: "ADDRESS",
      hash: data.address,
      status: "new",
    };
    if (!getUserSubscription(state.user, data.address)) {
      actions.user.setSubscription(newSubscription);
      createSubscription(state.user, newSubscription);
    }
  };

  return (
    <Box
      marginY={2}
      paddingX={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Card variant="outlined">
        <CardContent>
          <div>
            <h2>Address Information</h2>
            {data ? (
              <div>
                <p>Address: {data.address}</p>
                <p>Number of confirmed transactions: {data.tx_count}</p>
                <p>
                  Total {state.user.currency} Received:{" "}
                  {exchangeRate(
                    state.blockchain.rates,
                    state.user.currency,
                    data.total_received
                  )}
                </p>
                <p>
                  Total {state.user.currency} Spent:{" "}
                  {exchangeRate(
                    state.blockchain.rates,
                    state.user.currency,
                    data.total_spent
                  )}
                </p>
                <p>
                  Total {state.user.currency} Unspent:{" "}
                  {exchangeRate(
                    state.blockchain.rates,
                    state.user.currency,
                    data.total_unspent
                  )}
                </p>
                <p>
                  Current Balance ({state.user.currency}):{" "}
                  {exchangeRate(
                    state.blockchain.rates,
                    state.user.currency,
                    data.final_balance
                  )}
                </p>
              </div>
            ) : (
              <p>Address not found</p>
            )}
          </div>
        </CardContent>
        {!(state.user?.subscriptions || []).find(
          (s) => s.hash === (addressId || data.address)
        ) && (
          <CardActions>
            <Button size="small" onClick={subscribe}>
              Subscribe
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
}

export default AddressInfo;
