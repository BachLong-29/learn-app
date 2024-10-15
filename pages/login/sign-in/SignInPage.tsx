import { Box } from 'ui-components/General/Box';
import { FastField } from 'formik';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import PositiveButton from 'ui-components/Button/PositiveButton';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const SignInPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="84vh">
      <Container>
        <Flex h="100%">
          <Banner>
            <Box
              borderRadius="64px"
              as="img"
              src="/images/aaa.jpg"
              width="100%"
              height="100%"
            />
          </Banner>
          <LoginForm>
            <Box fontSize="32px">Login</Box>
            <Box w="100%">
              <InputField
                label="Username"
                placeholder="Enter username."
                wrapperStyle={{
                  marginTop: '16px',
                }}
              />
              <InputField
                label="Password"
                placeholder="Enter password."
                wrapperStyle={{
                  marginTop: '16px',
                }}
              />
              <PositiveButton
                style={{
                  marginTop: '16px',
                }}
              >
                Sign in
              </PositiveButton>
            </Box>
            <Flex justifyContent="start">
              {`Don't have an account?`}
              <Box
                textDecoration="underline"
                fontWeight={600}
                color={defaultTheme.colors.dark_blue}
                ml="4px"
                as="a"
              >
                Sign up
              </Box>
            </Flex>
          </LoginForm>
        </Flex>
      </Container>
    </Flex>
  );
};

const Container = styled(Box)`
  background: #fff;
  height: 800px;
  width: 50%;
  border-radius: 64px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Banner = styled(Box)`
  width: 40%;
`;

const LoginForm = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  // background: ${defaultTheme.colors.dark_blue};
  color: ${defaultTheme.colors.dark_blue};
  padding: 40px 80px;
  border-radius: 4px;
`;

export default SignInPage;
