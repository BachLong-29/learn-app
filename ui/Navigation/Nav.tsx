import React from 'react';
import styles from './styles/Menu.module.css';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const toggleMenu = () => {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle?.classList.toggle('active');
    navigation?.classList.toggle('active');
  };
  const goHome = () => {
    router.push('/');
  };
  const goStudentBoard = () => {
    router.push('/student');
  };
  const goClassBoard = () => {
    router.push('/class');
  };
  const goExamBoard = () => {
    router.push('/exam');
  };
  return (
    <>
      <div className={styles.containerA}>
        <div className={styles.header}>
          <div className={styles.menuToggle} onClick={toggleMenu}></div>
          <ul className={styles.navigation}>
            <li className={styles.left}>
              <div className={styles.flex}>
                <a onClick={goStudentBoard}>Student</a>
                <div className={`${styles.dot} ${styles.right}`}></div>
              </div>
            </li>
            <li className={styles.left}>
              <div className={styles.flex}>
                <a onClick={goClassBoard}>Class</a>
                <div className={`${styles.dot} ${styles.right}`}></div>
              </div>
            </li>
          </ul>
          <a onClick={goHome} className={styles.logo}>
            학생<span>.</span>
          </a>
          <ul className={styles.navigation}>
            <li className={styles.right}>
              <div className={styles.flex}>
                <div className={`${styles.dot} ${styles.left}`}></div>
                <a onClick={goExamBoard}>Exam</a>
              </div>
            </li>
            <li className={styles.right}>
              <div className={styles.flex}>
                <div className={`${styles.dot} ${styles.left}`}></div>
                <a>Sign up</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
