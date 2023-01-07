import React from 'react';
import styles from './styles/Computer.module.css';

const Computer = () => {
  return (
    <>
      <div className={styles.pc}>
        <div className={`${styles.screen} ${styles.behind}`}></div>
        <div className={styles.screen}>
          <div className={styles.label}>acer</div>
        </div>
        <div className={`${styles.foot} ${styles.second}`}></div>
        <div className={styles.foot}></div>
      </div>
    </>
  );
};

export default Computer;
