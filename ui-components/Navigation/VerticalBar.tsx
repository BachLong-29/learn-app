import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import HomeOutlined from '@ant-design/icons/HomeOutlined';
import IdcardOutlined from '@ant-design/icons/IdcardOutlined';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import useBreakpoint from 'ui-components/Grid';
import { useRouter } from 'next/router';
import { useState } from 'react';

const IconKey = {
  TOGGLE: 'toggle',
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
  };
  const goStudentBoard = () => {
    router.push('/student');
  };
  const goClassBoard = () => {
    router.push('/class');
  };
  const page = router.pathname.split('/')?.[1];

  const icons = [
    {
      key: IconKey.TOGGLE,
      position: 16,
      content: active ? (
        <MenuUnfoldOutlined
          style={{
            fontSize: 30,
            cursor: 'pointer',
          }}
        />
      ) : (
        <MenuFoldOutlined
          style={{
            fontSize: 30,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => {
        setActive(!active);
      },
    },
    {
      key: IconKey.HOME,
      position: 16,
      label: 'Home',
      content: (
        <HomeOutlined
          // onClick={goHome}
          style={{
            fontSize: 30,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goHome(),
    },
    {
      key: IconKey.STUDENT,
      label: 'Student',
      position: 144,
      content: (
        <UserOutlined
          style={{
            fontSize: 30,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goStudentBoard(),
    },
    {
      key: IconKey.CLASS,
      label: 'Class',
      position: 207,
      content: (
        <IdcardOutlined
          style={{
            fontSize: 30,
            cursor: 'pointer',
          }}
        />
      ),
      callback: () => goClassBoard(),
    },
  ];
  return (
    <Container active={active} display={screens.lg ? 'flex' : 'none'}>
      {icons.map((icon) => (
        <Flex
          alignItems="center"
          key={icon.key}
          zIndex={1}
          cursor="pointer"
          onClick={icon.callback}
        >
          <Box
            zIndex={1}
            color={
              page === icon.key
                ? defaultTheme.colors.dark_blue
                : defaultTheme.colors.pink
            }
            marginRight="8px"
          >
            {icon.content}
          </Box>

          <LabelIcon
            active={active}
            color={
              page === icon.key
                ? defaultTheme.colors.dark_blue
                : defaultTheme.colors.pink
            }
          >
            {icon.label}
          </LabelIcon>
        </Flex>
      ))}
      <WrapperIcon
        active={active}
        top={icons.find((icon) => icon.key === page)?.position}
      />
    </Container>
  );
};

const Container = styled(Box)<{ active: boolean }>`
  height: calc(100vh - 165px);
  width: ${(props) => (props.active ? '200px' : '30px')};
  background: ${defaultTheme.colors.dark_blue};
  margin-left: 20px;
  padding: 20px 10px;
  border-radius: 25px;
  flex-direction: column;
  gap: 30px;
  position: relative;
  transition: 500ms;
  overflow: hidden;
`;
const WrapperIcon = styled(Box)<{ active: boolean }>`
  position: absolute;
  background: ${defaultTheme.colors.pink};
  padding: 2px;
  width: ${(props) => (props.active ? '166px' : '32px')};
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 500ms;
  left: 7px;
`;
const LabelIcon = styled(Box)<{ active: boolean }>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 500ms;
`;

export default VerticalBar;
