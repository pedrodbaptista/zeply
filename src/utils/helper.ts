import moment from "moment";
import { IRates } from "../redux/reducers/blockchainReducer/blockchainModel";
import {
  ISearchCount,
  UserState,
} from "../redux/reducers/userReducer/userModel";
import { IAddress, IResponseAddress } from "../types/address";
import { HashType } from "../types/hash";
import { IResponseTransaction, ITransaction } from "../types/transaction";
import { ICurrency } from "../types/user";

export const mapAddressToIAddress = (data: IResponseAddress): IAddress => {
  return {
    address: data.address,
    final_balance: data.final_balance,
    total_received: data.total_received,
    total_spent: data.total_sent,
    total_unspent: 0,
    tx_count: data.n_tx,
  } as IAddress;
};

export const mapTransactionToITransaction = (
  data: IResponseTransaction
): ITransaction => {
  return {
    txid: data.hash,
    received_time: moment(data.received).toISOString(),
    status: data.confirmed ? "Confirmed" : "Unconfirmed",
    size: data.size,
    number_confirmations: data.confirmations,
    total_input: (data.inputs || []).reduce(
      (acc: number, i: { output_value: number }) => acc + i.output_value,
      0
    ),
    total_output: (data.outputs || []).reduce(
      (acc: number, i: { value: number }) => acc + i.value,
      0
    ),
    total_fees: data.fees,
  } as ITransaction;
};

export const getUserSubscription = (user: UserState, hash: string) => {
  return (user?.subscriptions || []).find((s) => s.hash === hash);
};

export const getTopSearch = (searchCounts: ISearchCount): ISearchCount => {
  return Object.keys(searchCounts)
    .map(
      (t) =>
        [t, searchCounts[t].count, searchCounts[t].type] as [
          string,
          number,
          HashType
        ]
    )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .reduce((newTop, [key, count, type]) => {
      newTop[key] = {
        count,
        type,
      };

      return newTop;
    }, {} as ISearchCount);
};

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getExampleAddress = (
  isAddress: boolean = false,
  randomError: boolean = true
) => {
  if (randomError) {
    if (!isAddress && randomIntFromInterval(0, 10) > 6) {
      throw Error("Not an address");
    }
  }
  return {
    address: `tb1qaa493cm7ekevdhv3lm07zlep6fh4a6a6${randomIntFromInterval(
      100000,
      900000
    )}`,
    final_balance: 0.01841,
    total_received: 0.01932579,
    total_spent: 0.00091579,
    total_unspent: 0,
    tx_count: 6,
  } as IAddress;
};
export const getExampleTransaction = (
  isTransaction: boolean = false,
  randomError: boolean = true
) => {
  if (randomError) {
    if (!isTransaction && randomIntFromInterval(0, 3) > 6) {
      throw Error("Not an Transaction");
    }
  }
  return {
    txid: `2d9e35680ba093c5a37eb7c9dd069654356e13e30ba24d051ecd94d029${randomIntFromInterval(
      100000,
      900000
    )}`,
    received_time: "2023-05-29T17:44:53.092Z",
    status: "Confirmed",
    size: 223,
    number_confirmations: 6,
    total_input: 1860000,
    total_output: 1850000,
    total_fees: 10000,
  } as ITransaction;
};

export const exchangeRate = (rates: IRates, to: ICurrency, btc: number) => {
  return to === "BTC" ? btc : btc * rates[to as keyof typeof rates].last;
};
