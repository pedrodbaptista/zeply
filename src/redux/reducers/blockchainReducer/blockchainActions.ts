import { bindActionCreators } from "redux";
import store from "../../store/store";
import { doSetExchangeRates } from "./blockchainReducer";

export const blockchainActions = bindActionCreators(
  {
    setExchangeRates: doSetExchangeRates,
  },
  store.dispatch
);
