import { Flex } from 'ui-components/General/Flex';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import defaultTheme from 'ui-components/theme/theme';
import { useRouter } from 'next/router';
import { useState } from 'react';

const VerticalBar = () => {
  const router = useRouter();
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
  return (
    <Flex
      style={{
        height: 'calc(100vh - 165px)',
        width: '40px',
        background: defaultTheme.colors.dark_blue,
        marginLeft: '20px',
        padding: '20px 10px',
        borderRadius: '30px',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <HomeOutlined
        onClick={goHome}
        style={{
          fontSize: '24px',
          color: defaultTheme.colors.pink,
          cursor: 'pointer',
        }}
      />
      <UserOutlined
        onClick={goStudentBoard}
        style={{
          fontSize: '24px',
          color: defaultTheme.colors.pink,
          cursor: 'pointer',
        }}
      />
      <IdcardOutlined
        onClick={goClassBoard}
        style={{
          fontSize: '24px',
          color: defaultTheme.colors.pink,
          cursor: 'pointer',
        }}
      />
    </Flex>
  );
};

export default VerticalBar;
