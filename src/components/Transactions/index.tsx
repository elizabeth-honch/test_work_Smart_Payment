import { Header } from "./Header";
import { useState } from "react";
import { transactions } from "../../data/transactions";
import { TransactionItem } from "./TransactionItem";
import { TransactionT } from "./types";
import styles from './styles.module.scss';

export const Transactions = () => {
  const [activeStatus, setActiveStatus] = useState<string>('all');

  return (
    <div className={styles.transactions}>
      <Header
        status={activeStatus}
        setStatus={setActiveStatus}
      />

      <div className={styles.transactions__block}>
        {transactions.map((transaction: TransactionT) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  )
};