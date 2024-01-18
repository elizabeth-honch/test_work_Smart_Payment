import React from 'react';
import logo from '../../public/images/logo.svg';
import visaIcon from '../../public/images/visaIcon.svg';
import styles from './styles.module.scss';
import { CardT } from './types';

export const Card: React.FC<CardT> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <span className={styles.card__status}>{card.status}</span>
        <img className={styles.card__logo} src={logo} alt="logo" />
      </div>

      <div>
        <p className={styles.card__sum}>{card.sum}</p>
        <p className={styles.card__text}>Available Balance</p>
      </div>

      <div className={styles.card__footer}>
        <p className={styles.card__number}>{card.number}</p>
        <img src={visaIcon} alt={card.type} />
      </div>
    </div>
  );
};
