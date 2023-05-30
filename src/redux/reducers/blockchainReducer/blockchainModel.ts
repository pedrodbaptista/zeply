export interface BlockchainState {
  rates: IRates;
}

export interface IRates {
  [key: string]: {
    "15m": number;
    last: number;
    buy: number;
    sell: number;
    symbol: string;
  };
}
