import styles from './styles.module.scss';
import React from 'react';
import { ChildrenT } from './types';

export const Title: React.FC<ChildrenT> = ({ customStyle, children }) => {
  return (
    <h2 style={customStyle} className={styles.title}>
      {children}
    </h2>
  );
};
