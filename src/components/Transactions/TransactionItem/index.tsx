import React from 'react';
import minusWalletIcon from '../../../public/images/minusWalletIcon.svg';
import plusWalletIcon from '../../../public/images/plusWalletIcon.svg';
import { TransactionItemT } from './types';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { CardBlock } from '../../../shared/UIComponents/CardBlock';

export const TransactionItem:React.FC<TransactionItemT> = ({ transaction }) => {
  const imgSrc = transaction.type === 'profit'
    ? plusWalletIcon
    : minusWalletIcon;
  
  const imgClass = transaction.type === 'profit'
  ? styles.transaction__profitIcon
  : styles.transaction__paymentIcon;


  const priceClass = transaction.type === 'profit'
    ? styles.transaction__priceProfit
    : styles.transaction__pricePayment;

  return (
    <CardBlock>
      <div className={styles.transaction}>
        <div className={styles.transaction__info}>
          <div className={clsx(styles.transaction__icon, imgClass)}>
            <img src={imgSrc} alt="transaction icon" />
          </div>

          <div>
            <p className={styles.transaction__title}>{transaction.title}</p>
            <p className={styles.transaction__text}>{transaction.location}</p>
          </div>
        </div>

        <p className={clsx(styles.transaction__price, priceClass)}>
          {transaction.balance}
        </p>
      </div>
    </CardBlock>
  );
};
