import { Title } from "../../shared/UIComponents/Title";
import { AccountBalance } from "../AccountBalance";
import { PrepaidCards } from "../PrepaidCards";
import styles from './styles.module.scss';
import { Transactions } from "../Transactions";

export const MainInformation = () => {
  return (
    <section className={styles.info}>
      <div>
        <Title>XEPPT Account Balance</Title>
        <AccountBalance />
      </div>

      <div className={styles.info__block}>
        <Title>XEPPT Prepaid Card</Title>
        <PrepaidCards />
      </div>

      <div className={styles.info__block}>
        <Title>Transactions</Title>
        <Transactions />
      </div>
    </section>
  );
};
