import { bindActionCreators } from "redux";
import store from "../../store/store";
import {
  doSetUser,
  doSetSubscription,
  doGetUser,
  doClear,
  doUpdateSubscription,
  doSetSearchCounts,
  doSetCurrency,
} from "./userReducer";

export const userActions = bindActionCreators(
  {
    getUser: doGetUser,
    setUser: doSetUser,
    setSubscription: doSetSubscription,
    updateSubscription: doUpdateSubscription,
    setSearchCounts: doSetSearchCounts,
    setCurrency: doSetCurrency,
    clear: doClear,
  },
  store.dispatch
);
