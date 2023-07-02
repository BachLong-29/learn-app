import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import PositiveButton from 'ui-components/Button/PositiveButton';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const SignUp = (props) => {
  const { currentForm, handleSwitchForm } = props;
  return (
    <>
      <LForm currentForm={currentForm}>
        <Box textTransform="uppercase" fontWeight={600} fontSize="18px">
          Create an account
        </Box>
        <Box>
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
          <InputField
            label="ConfirmPassword"
            placeholder="Confirm password."
            wrapperStyle={{
              marginTop: '16px',
            }}
          />
          <PositiveButton
            style={{
              height: '40px',
              width: '100px',
              marginTop: '16px',
              marginBottom: '8px',
            }}
          >
            Sign Up
          </PositiveButton>
          <Box>
            {`Don't have an account`} ?{' '}
            <Box
              color={defaultTheme.colors.blue_purple}
              textDecoration="underline"
              onClick={() => handleSwitchForm('sign-in')}
              fontWeight={600}
              cursor="pointer"
              ml="4px"
              as="a"
            >
              Sign in.
            </Box>
          </Box>
        </Box>
      </LForm>
    </>
  );
};

const LForm = styled(Flex)<{ currentForm?: 'sign-up' | 'sign-in' }>`
  position: relative;
  left: ${(props) => (props.currentForm === 'sign-up' ? 0 : '100%')};
  color: ${defaultTheme.colors.dark_blue};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
  border-radius: 4px;
  transition: 0.5s;
  width: 50%;
`;

export default SignUp;
