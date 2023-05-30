import { blockchainActions } from "./blockchainReducer/blockchainActions";
import { userActions } from "./userReducer/userActions";

const actions = {
  user: userActions,
  blockchain: blockchainActions,
};

export default actions;
