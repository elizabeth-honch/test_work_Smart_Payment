import styles from './styles.module.scss';
import logo from '../../public/images/logo.svg';
import burgerMenuIcon from '../../public/images/burgerIcon.svg';
import notificationIcon from '../../public/images/notification.svg';
import clsx from 'clsx';
import { useState } from 'react';
import { Nav } from './Nav';

export const MainHeader = () => {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [isVisibleNavMenu, setIsVisibleNavMenu] = useState<boolean>(false);

  const openNavigation = () => {
    setIsVisibleNavMenu(isVisibleNavMenu => !isVisibleNavMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button className={styles.header__burgerMenu} onClick={openNavigation}>
          <img src={burgerMenuIcon} alt="burger menu icon" />
        </button>

        <div className={styles.header__group}>
          <img className={styles.header__logo} src={logo} alt="logo" />

          <div className={clsx(isVisibleNavMenu && styles.header__navMobile)}>
            <Nav
              activeNav={activeNav}
              setActiveNav={setActiveNav}
            />
          </div>
        </div>

        <div className={styles.header__info}>
          <p>FR</p>
 
          <button className={styles.header__circleBtn}>
            <img src={notificationIcon} alt="Notification icon" />
          </button>

          <button
            className={clsx(
              styles.header__circleBtn,
              styles.header__pmIcon,
            )}
          >
            PM
          </button>

          <select className={styles.header__select}>
            <option>Peter Morgan</option>
          </select>
        </div>
      </div>
    </header>
  );
};
