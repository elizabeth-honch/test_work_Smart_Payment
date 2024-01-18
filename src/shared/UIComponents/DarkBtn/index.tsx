import React from 'react';
import styles from './styles.module.scss';
import { ChildrenT } from './types';

export const Darkbtn:React.FC<ChildrenT> = ({ customStyle, children }) => {
  return (
    <button style={customStyle} className={styles.darkBtn}>
      {children}
    </button>
  );
};
