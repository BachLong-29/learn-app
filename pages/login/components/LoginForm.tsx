import { useMemo, useState } from 'react';

import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';

type FormTypes = 'sign-in' | 'sign-up';
const LoginForm = () => {
  const [currentForm, setCurrentForm] = useState<FormTypes>('sign-in');

  const handleSwitchForm = (type: FormTypes) => {
    console.log({ type });
    setCurrentForm(type);
  };

  console.log({ currentForm });

  const img = useMemo(() => {
    return (
      // <Banner>
      <Image
        currentForm={currentForm}
        alt="sign-in"
        as="img"
        src="/images/aaa.jpg"
      />
      // </Banner>
    );
  }, [currentForm]);

  const img2 = useMemo(() => {
    return (
      // <Banner>
      <Image2
        currentForm={currentForm}
        alt="sign-in"
        as="img"
        src="/images/bbb.jpg"
      />
      // </Banner>
    );
  }, [currentForm]);

  return (
    <Flex justifyContent="center" alignItems="center" h="84vh">
      <Container>
        <Flex h="100%" w="100%" position="absolute">
          <SignIn
            currentForm={currentForm}
            handleSwitchForm={handleSwitchForm}
          />
          {img}
        </Flex>
        <Flex h="100%">
          {img2}
          <SignUp
            currentForm={currentForm}
            handleSwitchForm={handleSwitchForm}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

const Image = styled(Box)<{ currentForm?: FormTypes }>`
  transition: 0.5s;
  position: relative;
  left: ${(props) => (props.currentForm === 'sign-in' ? 0 : '-100%')};
  width: 50%;
  height: 100%;
`;

const Image2 = styled(Box)<{ currentForm?: FormTypes }>`
  transition: 0.5s;
  left: ${(props) => (props.currentForm === 'sign-up' ? 0 : '-100%')};
  position: relative;
  width: 50%;
  height: 100%;
`;

const Container = styled(Box)`
  position: relative;
  background: #fff;
  // height: 800px;
  // width: 50%;
  width: 1000px;
  height: 600px;
  // border-radius: 64px;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Banner = styled(Box)`
  width: 40%;
`;

export default LoginForm;
