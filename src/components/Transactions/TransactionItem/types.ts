export type TransactionT = {
  id: string;
  title: string;
  location: string;
  balance: string;
  type: string;
};

export type TransactionItemT = {
  transaction: TransactionT;
};
