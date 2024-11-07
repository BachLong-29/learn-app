import { Dropdown, MenuProps } from 'antd';
import { useEffect, useState } from 'react';

import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import Image from 'next/image';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import defaultTheme from 'ui-components/theme/theme';
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
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'My Account',
      icon: <UserOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: 'Sign out',
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <>
      <div className={styles.containerA}>
        <div
          className={`${styles.header}  ${scroll ? styles.sticky : undefined}`}
        >
          <a onClick={goHome} className={styles.logo}>
            학생<span>.</span>
          </a>

          <Dropdown placement="bottomRight" menu={{ items }}>
            <Flex
              style={{
                marginLeft: 'auto',
                background: defaultTheme.colors.dark_blue,
                color: defaultTheme.colors.pink,
                padding: '5px 10px 5px 5px',
                borderRadius: '30px',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                maxWidth: '120px',
              }}
            >
              <Image
                width={35}
                height={35}
                alt="avatar-user"
                src="/images/default-avatar.jpg"
                style={{
                  borderRadius: '50%',
                  border: `1px solid ${defaultTheme.colors.pink}`,
                }}
              />
              <Box
                style={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                Markky
              </Box>
            </Flex>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
