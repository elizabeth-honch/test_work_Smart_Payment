import plusIcon from '../../public/images/plusIcon.svg';
import { Darkbtn } from '../../shared/UIComponents/DarkBtn';
import styles from './styles.module.scss';

export const NewCard = () => {
  return (
    <div className={styles.newCard}>
      <Darkbtn customStyle={{ padding: '8px' }}>
        <img src={plusIcon} alt="plus icon" />
      </Darkbtn>

      <p className={styles.newCard__title}>Order a new card</p>
    </div>
  );
};
