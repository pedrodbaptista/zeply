import { combineReducers } from "redux";
import { userReducer } from "../reducers/userReducer/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
