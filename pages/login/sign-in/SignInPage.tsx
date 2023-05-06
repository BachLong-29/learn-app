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
    <>
      {/* <img
        src="/images/svg/High School-cuate.svg"
        width="300px"
        height="300px"
      /> */}
      <Container>
        <Flex h="100%">
          <Banner>
            <img
              src="/images/svg/High School-cuate.svg"
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
          </LoginForm>
        </Flex>
      </Container>
    </>
  );
};

const Container = styled(Box)`
  height: 90vh;
  width: 100%;
  padding: 10px;
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
