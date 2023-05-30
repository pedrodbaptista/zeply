export interface IAddress {
  address: string;
  final_balance: number;
  total_received: number;
  total_spent: number;
  total_unspent: number;
  tx_count: number;
}

export interface IResponseAddress {
  address: string;
  n_tx: number;
  n_unredeemed: number;
  total_received: number;
  total_sent: number;
  final_balance: number;
}