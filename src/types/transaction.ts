export interface ITransaction {
  txid: string;
  received_time: string;
  status: string;
  size: number;
  number_confirmations: number;
  total_input: number;
  total_output: number;
  total_fees: number;
}

export interface IResponseTransaction {
  hash: string;
  received: string;
  confirmed: string;
  size: number;
  confimations: number;
  inputs: {output_value: number}[];
  outputs: {value: number}[];
  fees: number;
}

