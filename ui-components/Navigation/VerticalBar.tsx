import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import useBreakpoint from 'ui-components/Grid';
import { useRouter } from 'next/router';
import { useState } from 'react';

const IconKey = {
  HOME: 'home',
  STUDENT: 'student',
  CLASS: 'class',
};

const VerticalBar = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const screens = useBreakpoint();
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
  const page = router.pathname.split('/')?.[1];

  const icons = [
    {
      key: IconKey.HOME,
      position: 16,
      content: (
        <HomeOutlined
          // onClick={goHome}
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goHome(),
    },
    {
      key: IconKey.STUDENT,
      position: 74,
      content: (
        <UserOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goStudentBoard(),
    },
    {
      key: IconKey.CLASS,
      position: 132,
      content: (
        <IdcardOutlined
          style={{
            fontSize: 25,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goClassBoard(),
    },
  ];
  return (
    <Container display={screens.lg ? 'flex' : 'none'}>
      {icons.map((icon) => (
        <>
          <Box
            onClick={icon.callback}
            zIndex={1}
            color={
              page === icon.key
                ? defaultTheme.colors.dark_blue
                : defaultTheme.colors.pink
            }
          >
            {icon.content}
          </Box>
        </>
      ))}
      <WrapperIcon top={icons.find((icon) => icon.key === page)?.position} />
    </Container>
  );
};

const Container = styled(Box)`
  height: calc(100vh - 165px);
  width: 40px;
  background: ${defaultTheme.colors.dark_blue};
  margin-left: 20px;
  padding: 20px 10px;
  border-radius: 30px;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;
const WrapperIcon = styled(Box)`
  position: absolute;
  background: ${defaultTheme.colors.pink};
  padding: 2px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.2s;
`;

export default VerticalBar;
