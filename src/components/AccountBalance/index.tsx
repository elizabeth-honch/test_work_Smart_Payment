
import { accountBalance } from "../../data/accountBalance";
import { CardsT } from "./types";
import CanadaIcon from '../../public/images/canadaIcon.svg';
import styles from './styles.module.scss';

export const AccountBalance = () => {
  return (
    <ul className={styles.cards}>
      {accountBalance.map((card: CardsT) => (
        <li key={card.id} className={styles.cards__item}>
          {card.country === 'Canada'
            ? <img src={CanadaIcon} alt="Canada icon" />
            : <p>{card.country}</p>
          }
          <p className={styles.cards__sum}>{card.sum}</p>
        </li>
      ))}
    </ul>
  );
};
