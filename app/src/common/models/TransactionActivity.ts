export const enum TransactionActivityType {
  SEND = "Send",
  RECEIVE = "Receive",
  REQUEST = "Request",
}

export const enum TransactionActivityStatus {
  DONE = "Done",
  PENDING = "Pending",
  ERROR = "Error",
}

export interface TransactionActivityData {
  type: string;
  timestamp: string;
  to: { hash: string };
  from: { hash: string };
  token: {
    name: string;
    symbol: string;
    decimals: string;
  };
  total: {
    decimals: string;
    value: string;
  };
  tx_hash: string;
}
