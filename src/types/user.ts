export interface IUser {
  email: string;
  subscriptions: string[];
  isAuthenticated: boolean;
}

export type ICurrency = "USD" | "EUR" | "BTC";
