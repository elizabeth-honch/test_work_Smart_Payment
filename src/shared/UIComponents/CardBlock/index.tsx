import React from 'react';
import styles from './styles.module.scss';
import { ChildrenT } from './types';

export const CardBlock:React.FC<ChildrenT> = ({ children }) => {
  return (
    <div className={styles.cardBlock}>
      {children}
    </div>
  );
};
