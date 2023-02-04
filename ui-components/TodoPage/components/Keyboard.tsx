import React from 'react';
import styles from './styles/Keyboard.module.css';

const Keyboard = () => {
  return (
    <>
      <div className={styles.keyboard}>
        <div className={styles['key-foot']}></div>
        <div className={styles.keycaps}>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.medium}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
          </div>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.medium}`}></div>
          </div>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.medium}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
          </div>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.medium}`}></div>
          </div>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.shift}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.shift}`}></div>
          </div>
          <div className={styles['first-row']}>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.medium}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.space}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.medium}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
            <div className={`${styles.square} ${styles.small}`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
