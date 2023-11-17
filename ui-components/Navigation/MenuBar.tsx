import React, { useEffect, useState } from 'react';

import styles from './styles/MenuBar.module.css';
import { useRouter } from 'next/router';

const MenuBar = () => {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState(false);

  const goHome = () => {
    router.push('/');
    setActive(false);
  };
  const goStudentBoard = () => {
    router.push('/student');
    setActive(false);
  };
  const goClassBoard = () => {
    router.push('/class');
    setActive(false);
  };
  const goExamBoard = () => {
    router.push('/exam');
    setActive(false);
  };
  const goLogin = () => {
    router.push('/login');
    setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scroll]);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className={styles.containerA}>
        <div
          className={`${styles.header}  ${scroll ? styles.sticky : undefined}`}
        >
          <ul
            className={`${styles.navigation} ${
              active ? styles.active : undefined
            }`}
          >
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
            <li className={`${styles.left} ${styles.formenu}`}>
              <div className={styles.flex}>
                <div className={`${styles.dot} ${styles.left}`}></div>
                <a onClick={goExamBoard}>Exam</a>
              </div>
            </li>
            <li className={`${styles.left} ${styles.formenu}`}>
              <div className={styles.flex}>
                <div className={`${styles.dot} ${styles.left}`}></div>
                <a>Sign up</a>
              </div>
            </li>
          </ul>
          <a onClick={goHome} className={styles.logo}>
            학생<span>.</span>
            {/* <img src="/images/icon.png" width="80px" height="70px" /> */}
          </a>
          <div
            className={`${styles.menuToggle} ${
              active ? styles.active : undefined
            }`}
            onClick={toggleMenu}
          ></div>
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
                <a onClick={goLogin}>Login</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
