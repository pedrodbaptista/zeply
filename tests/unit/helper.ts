import {
  IResponseTransaction,
  ITransaction,
} from "../../src/types/transaction";
import { IAddress, IResponseAddress } from "../../src/types/address";
import {
  ISubscription,
  UserState,
} from "../../src/redux/reducers/userReducer/userModel";
import { IRates } from "redux/reducers/blockchainReducer/blockchainModel";

export const address = {
  address: "bc1qgp5dtsr49e5dsuehmxek5yg8wvqn73tyzn2p4z",
  n_tx: 2,
  n_unredeemed: 2,
  total_received: 1031350000,
  total_sent: 931250000,
  final_balance: 100100000,
} as IResponseAddress;

export const mappedAddress = {
  address: "bc1qgp5dtsr49e5dsuehmxek5yg8wvqn73tyzn2p4z",
  final_balance: 100100000,
  total_received: 1031350000,
  total_spent: 931250000,
  total_unspent: 0,
  tx_count: 2,
} as IAddress;

export const transaction = {
  hash: "35457d268e8ecb6cabe38bc7ed87989622c615e257c449d991f017838b185d16",
  received: "2014-03-29T01:29:19Z",
  confirmed: "2014-03-29T01:29:19Z",
  size: 636,
  confirmations: 64373,
  inputs: [
    {
      output_value: 16450000,
    },
  ],
  outputs: [
    {
      value: 70320221545,
    },
  ],
  fees: 10848,
} as unknown as IResponseTransaction;

export const mappedTransaction = {
  txid: "35457d268e8ecb6cabe38bc7ed87989622c615e257c449d991f017838b185d16",
  received_time: "2014-03-29T01:29:19.000Z",
  status: "Confirmed",
  size: 636,
  number_confirmations: 64373,
  total_input: 16450000,
  total_output: 70320221545,
  total_fees: 10848,
} as ITransaction;

export const user = {
  email: "test@test.com",
  subscriptions: [
    {
      type: "ADDRESS",
      hash: "1JiyC1yhk8FySjjEBmzbJ6cMGvJAjBkV3c",
      status: "read",
    },
    {
      type: "ADDRESS",
      hash: "14yXE3APMjErEn4Dme7eRxmd3ahHQxxVzL",
      status: "new",
    },
    {
      type: "ADDRESS",
      hash: "bc1qe5cgsry9527k6tuktr844xhxqhlnrl25n0qf87",
      status: "new",
    },
  ],
  searchCounts: {
    "1JiyC1yhk8FySjjEBmzbJ6cMGvJAjBkV3c": {
      count: 2,
      type: "ADDRESS",
    },
    "14yXE3APMjErEn4Dme7eRxmd3ahHQxxVzL": {
      count: 2,
      type: "ADDRESS",
    },
    bc1qe5cgsry9527k6tuktr844xhxqhlnrl25n0qf87: {
      count: 1,
      type: "ADDRESS",
    },
    bc1q00nhw6gk3reu6r3dfkud2mkrd7kskeh8kwfrfu: {
      count: 5,
      type: "ADDRESS",
    },
    "1ArXwccUkevRapyYZvc4PUdBUwsk535udm": {
      count: 1,
      type: "ADDRESS",
    },
    "03221070513a8e5ac8851889961547ce70b53640f76d904fd99e530e390c2a1a": {
      count: 4,
      type: "TRANSACTIOM",
    },
    "1f048a685cc5302719850204b2f67b30861f916601c96c98b7f5f90c463ce28d": {
      count: 5,
      type: "TRANSACTION",
    },
  },
  topSearch: {
    bc1q00nhw6gk3reu6r3dfkud2mkrd7kskeh8kwfrfu: {
      count: 5,
      type: "ADDRESS",
    },
    "1f048a685cc5302719850204b2f67b30861f916601c96c98b7f5f90c463ce28d": {
      count: 5,
      type: "TRANSACTION",
    },
    "03221070513a8e5ac8851889961547ce70b53640f76d904fd99e530e390c2a1a": {
      count: 4,
      type: "TRANSACTIOM",
    },
    "1JiyC1yhk8FySjjEBmzbJ6cMGvJAjBkV3c": {
      count: 2,
      type: "ADDRESS",
    },
    "14yXE3APMjErEn4Dme7eRxmd3ahHQxxVzL": {
      count: 2,
      type: "ADDRESS",
    },
  },
  currency: "USD",
} as unknown as UserState;

export const subscription = {
  type: "ADDRESS",
  hash: "14yXE3APMjErEn4Dme7eRxmd3ahHQxxVzL",
  status: "new",
} as ISubscription;

export const mockedAddress = {
  address: `tb1qaa493cm7ekevdhv3lm07zlep6fh4a6a6`,
  final_balance: 0.01841,
  total_received: 0.01932579,
  total_spent: 0.00091579,
  total_unspent: 0,
  tx_count: 6,
} as IAddress;

export const mockedTransaction = {
  txid: "2d9e35680ba093c5a37eb7c9dd069654356e13e30ba24d051ecd94d029",
  received_time: "2023-05-29T17:44:53.092Z",
  status: "Confirmed",
  size: 223,
  number_confirmations: 6,
  total_input: 1860000,
  total_output: 1850000,
  total_fees: 10000,
} as ITransaction;

export const rates = {
  ARS: {
    "15m": 13190952.97,
    last: 13190952.97,
    buy: 13190952.97,
    sell: 13190952.97,
    symbol: "ARS",
  },
  AUD: {
    "15m": 42474.27,
    last: 42474.27,
    buy: 42474.27,
    sell: 42474.27,
    symbol: "AUD",
  },
  BRL: {
    "15m": 140638.54,
    last: 140638.54,
    buy: 140638.54,
    sell: 140638.54,
    symbol: "BRL",
  },
  CAD: {
    "15m": 37675.49,
    last: 37675.49,
    buy: 37675.49,
    sell: 37675.49,
    symbol: "CAD",
  },
  CHF: {
    "15m": 25144.72,
    last: 25144.72,
    buy: 25144.72,
    sell: 25144.72,
    symbol: "CHF",
  },
  CLP: {
    "15m": 22383672.38,
    last: 22383672.38,
    buy: 22383672.38,
    sell: 22383672.38,
    symbol: "CLP",
  },
  CNY: {
    "15m": 172477.24,
    last: 172477.24,
    buy: 172477.24,
    sell: 172477.24,
    symbol: "CNY",
  },
  CZK: {
    "15m": 610153.25,
    last: 610153.25,
    buy: 610153.25,
    sell: 610153.25,
    symbol: "CZK",
  },
  DKK: {
    "15m": 120533.47,
    last: 120533.47,
    buy: 120533.47,
    sell: 120533.47,
    symbol: "DKK",
  },
  EUR: {
    "15m": 25826.2,
    last: 25826.2,
    buy: 25826.2,
    sell: 25826.2,
    symbol: "EUR",
  },
  GBP: {
    "15m": 22339.21,
    last: 22339.21,
    buy: 22339.21,
    sell: 22339.21,
    symbol: "GBP",
  },
  HKD: {
    "15m": 218058.56,
    last: 218058.56,
    buy: 218058.56,
    sell: 218058.56,
    symbol: "HKD",
  },
  HRK: {
    "15m": 122719.34,
    last: 122719.34,
    buy: 122719.34,
    sell: 122719.34,
    symbol: "HRK",
  },
  HUF: {
    "15m": 8266794.61,
    last: 8266794.61,
    buy: 8266794.61,
    sell: 8266794.61,
    symbol: "HUF",
  },
  INR: {
    "15m": 1975269.67,
    last: 1975269.67,
    buy: 1975269.67,
    sell: 1975269.67,
    symbol: "INR",
  },
  ISK: {
    "15m": 3478168.97,
    last: 3478168.97,
    buy: 3478168.97,
    sell: 3478168.97,
    symbol: "ISK",
  },
  JPY: {
    "15m": 3875938.99,
    last: 3875938.99,
    buy: 3875938.99,
    sell: 3875938.99,
    symbol: "JPY",
  },
  KRW: {
    "15m": 36860833.91,
    last: 36860833.91,
    buy: 36860833.91,
    sell: 36860833.91,
    symbol: "KRW",
  },
  NZD: {
    "15m": 45845.8,
    last: 45845.8,
    buy: 45845.8,
    sell: 45845.8,
    symbol: "NZD",
  },
  PLN: {
    "15m": 117477.66,
    last: 117477.66,
    buy: 117477.66,
    sell: 117477.66,
    symbol: "PLN",
  },
  RON: {
    "15m": 97534.93,
    last: 97534.93,
    buy: 97534.93,
    sell: 97534.93,
    symbol: "RON",
  },
  RUB: {
    "15m": 2180687.52,
    last: 2180687.52,
    buy: 2180687.52,
    sell: 2180687.52,
    symbol: "RUB",
  },
  SEK: {
    "15m": 201852.49,
    last: 201852.49,
    buy: 201852.49,
    sell: 201852.49,
    symbol: "SEK",
  },
  SGD: {
    "15m": 37342.82,
    last: 37342.82,
    buy: 37342.82,
    sell: 37342.82,
    symbol: "SGD",
  },
  THB: {
    "15m": 954778.52,
    last: 954778.52,
    buy: 954778.52,
    sell: 954778.52,
    symbol: "THB",
  },
  TRY: {
    "15m": 584399.86,
    last: 584399.86,
    buy: 584399.86,
    sell: 584399.86,
    symbol: "TRY",
  },
  TWD: {
    "15m": 598500.7,
    last: 598500.7,
    buy: 598500.7,
    sell: 598500.7,
    symbol: "TWD",
  },
  USD: {
    "15m": 27722.95,
    last: 27722.95,
    buy: 27722.95,
    sell: 27722.95,
    symbol: "USD",
  },
} as IRates;
