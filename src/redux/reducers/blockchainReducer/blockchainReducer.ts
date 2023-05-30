import ActionObject from "../../types/reduxTypes";
import { IRates, BlockchainState } from "./blockchainModel";

const initialState: BlockchainState = {
  rates: {},
};

export const BlockchainActionTypes = {
  SET_EXCHANGE_RATE: "SET_EXCHANGE_RATE",
};

export const doSetExchangeRates = (rates: IRates) => {
  return {
    type: BlockchainActionTypes.SET_EXCHANGE_RATE,
    payload: rates,
  };
};

export const blockchainReducer = (
  state = initialState,
  action: ActionObject
): BlockchainState => {
  switch (action.type) {
    case BlockchainActionTypes.SET_EXCHANGE_RATE:
      return {
        ...state,
        rates: action.payload,
      };
    default:
      return state;
  }
};
