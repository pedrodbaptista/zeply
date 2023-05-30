import { HashType } from "../../../types/hash";

export interface UserState {
  email: string;
  subscriptions: ISubscription[];
  searchCounts: ISearchCount; // all searches
  topSearch: ISearchCount; // only top 5 search
}

export interface ISubscription {
  type: HashType;
  hash: string;
  status: "new" | "updated" | "read" | "end";
}

export interface ISearchCount {
  [key: string]: {
    count: number;
    type: HashType;
  };
}
