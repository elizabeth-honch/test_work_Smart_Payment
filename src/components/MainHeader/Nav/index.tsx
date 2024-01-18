import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { NavT } from './types';

export const Nav:React.FC<NavT> = ({ activeNav, setActiveNav }) => {
  const handleActiveNav = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li
          className={clsx(
            styles.nav__item,
            activeNav === 'home' && styles.nav__activeItem
          )}
          onClick={() => handleActiveNav('home')}
        >
          Home
        </li>
        <li
          className={clsx(
            styles.nav__item,
            activeNav === 'card' && styles.nav__activeItem
          )}
          onClick={() => handleActiveNav('card')}
        >
          XEPPT Card
        </li>
        <li
          className={clsx(
            styles.nav__item,
            activeNav === 'statement' && styles.nav__activeItem
          )}
          onClick={() => handleActiveNav('statement')}
        >
          Statements
        </li>
      </ul>
    </nav>
  );
};
