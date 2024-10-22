import React, { useEffect, useState } from 'react';

import styles from './styles/MenuBar.module.css';
import { useRouter } from 'next/router';

const MenuBar = () => {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);

  const goHome = () => {
    router.push('/');
  };
  const goLogin = () => {
    router.push('/login');
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

  return (
    <>
      <div className={styles.containerA}>
        <div
          className={`${styles.header}  ${scroll ? styles.sticky : undefined}`}
        >
          <a onClick={goHome} className={styles.logo}>
            학생<span>.</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
