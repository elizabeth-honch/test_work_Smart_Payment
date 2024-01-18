import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Darkbtn } from '../../../shared/UIComponents/DarkBtn';

export const Header:React.FC<any> = ({ status, setStatus }) => {
  const handleActiveStatus = (currentStatus: string) => {
    setStatus(currentStatus);
  };

  return (
    <>
    {/* // <div className={styles.header}> */}
      <div className={styles.header__action}>
        <button
          className={clsx(
            styles.header__filterBtn,
            status === 'all' && styles.header__activeFilterBtn
          )}
          onClick={() => handleActiveStatus('all')}
        >
          All
        </button>

        <button
          className={clsx(
            styles.header__filterBtn,
            status === 'card' && styles.header__activeFilterBtn
          )}
          onClick={() => handleActiveStatus('card')}
        >
          XEPPT Card
        </button>
      </div>

      <div className={styles.header__moreBtn}>
        <Darkbtn customStyle={{ padding: '10px 24px' }}>
        Show more
      </Darkbtn>
      </div>
    {/* // </div> */}
    </>
  );
};
