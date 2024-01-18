import { Darkbtn } from "../../shared/UIComponents/DarkBtn";
import { Title } from "../../shared/UIComponents/Title";
import styles from './styles.module.scss';
import { bankAccounts } from "../../data/bankAccounts";
import { CardBlock } from "../../shared/UIComponents/CardBlock";
import plusIcon from '../../public/images/plusIcon.svg';

export const MainActions = () => {
  return (
    <section className={styles.mainActions}>
      <div className={styles.mainActions__btnBlock}>
        <Darkbtn customStyle={{
          width: '100%',
          padding: '13px 0',
          fontSize: '18px',
        }}>
          Add money
        </Darkbtn>
      </div>

      <div className={styles.mainActions__block}>
        <Title customStyle={{fontSize: '20px'}}>
          Bank Account and Cards
        </Title>

        <div className={styles.mainActions__list}>
          {bankAccounts.map((bank:any) => (
            <CardBlock key={bank.id}>
              <p className={styles.mainActions__title}>{bank.title}</p>
            </CardBlock>
          ))}

          <div className={styles.mainActions__link}>
            <Darkbtn customStyle={{ padding: '8px' }}>
              <img src={plusIcon} alt="plus icon" />
            </Darkbtn>

            <Title customStyle={{
              fontSize: '20px',
              margin: '0',
              textDecoration: 'underline',
            }}>
              Link a card or bank
            </Title>
          </div>
        </div>
      </div>
    </section>
  );
};
