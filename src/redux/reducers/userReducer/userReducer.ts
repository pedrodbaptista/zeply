import ActionObject from "../../types/reduxTypes";
import { IUser } from "../../../types/user";
import { ISearchCount, ISubscription, UserState } from "./userModel";

const initialState: UserState = {
  email: "",
  subscriptions: [],
  searchCounts: {},
  topSearch: {},
};

export const UserActionTypes = {
  GET_USER: "GET_USER",
  SET_USER: "SET_USER",
  SET_SUBSCRIPTIONS: "SET_SUBSCRIPTIONS",
  UPDATE_SUBSCRIPTION: "UPDATE_SUBSCRIPTION",
  SET_SEARCH_COUNT: "SET_SEARCH_COUNT",
  CLEAR: "CLEAR",
};

export const doGetUser = () => {
  return {
    type: UserActionTypes.GET_USER,
  };
};

export const doSetUser = (user: IUser) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: user,
  };
};

export const doSetSubscription = (subscription: ISubscription) => {
  return {
    type: UserActionTypes.SET_SUBSCRIPTIONS,
    payload: subscription,
  };
};

export const doUpdateSubscription = (subscription: ISubscription) => {
  return {
    type: UserActionTypes.UPDATE_SUBSCRIPTION,
    payload: subscription,
  };
};

export const doSetSearchCounts = (newValues: {
  searchCounts: ISearchCount;
  topSearch: ISearchCount;
}) => {
  return {
    type: UserActionTypes.SET_SEARCH_COUNT,
    payload: newValues,
  };
};

export const doClear = () => {
  return {
    type: UserActionTypes.CLEAR,
  };
};

export const userReducer = (
  state = initialState,
  action: ActionObject
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        email: action.payload.email,
        subscriptions: action.payload.password,
      };
    case UserActionTypes.SET_SUBSCRIPTIONS:
      const clonedState = { ...state };
      return {
        ...state,
        subscriptions: [...clonedState.subscriptions, action.payload],
      };
    case UserActionTypes.UPDATE_SUBSCRIPTION:
      const subscriptionIndex = state.subscriptions.findIndex(
        (s) => s.hash === action.payload.hash
      );
      const newSubscriptions = [...state.subscriptions];
      newSubscriptions[subscriptionIndex] = action.payload;
      return {
        ...state,
        subscriptions: newSubscriptions,
      };
    case UserActionTypes.SET_SEARCH_COUNT:
      return {
        ...state,
        searchCounts: action.payload.searchCounts,
        topSearch: action.payload.topSearch,
      };
    case UserActionTypes.CLEAR:
      return initialState;
    case UserActionTypes.GET_USER:
    default:
      return state;
  }
};
