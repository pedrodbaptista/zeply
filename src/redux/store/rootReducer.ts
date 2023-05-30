import { combineReducers } from "redux";
import { blockchainReducer } from "../reducers/blockchainReducer/blockchainReducer";
import { userReducer } from "../reducers/userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  blockchain: blockchainReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
