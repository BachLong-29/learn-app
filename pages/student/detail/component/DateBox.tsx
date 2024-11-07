import { Box } from 'ui-components/General/Box';
import React from 'react';
import dayjs from 'dayjs';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import useBreakpoint from 'ui-components/Grid';

const DateBox = (props: { dateOfBirth: string }) => {
  const { dateOfBirth } = props;
  const date = dayjs(dateOfBirth);
  const year = date.year();
  const month = String(date.month() + 1).padStart(2, '0');
  const day = String(date.date()).padStart(2, '0');
  const screens = useBreakpoint();
  return (
    <Container display={screens.lg ? 'flex' : 'none'}>
      <Box
        style={{
          background: '#fb4625',
          color: '#fff',
          fontSize: '28px',
          height: 'calc(100% - 20px)',
          padding: '10px',
          borderRadius: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
        }}
      >
        {year}
      </Box>
      <Box
        style={{
          color: defaultTheme.colors.pink,
          fontSize: '16px',
          marginBottom: '10px',
          marginLeft: '10px',
        }}
      >
        <Box
          style={{
            fontSize: '28px',
            display: 'inline-block',
            marginRight: '4px',
            color: '#fff396',
          }}
        >
          {day}
        </Box>
        DD
      </Box>
      <Box
        style={{
          color: defaultTheme.colors.pink,
          fontSize: '16px',
          marginBottom: '10px',
          marginLeft: '10px',
        }}
      >
        <Box
          style={{
            fontSize: '28px',
            display: 'inline-block',
            marginRight: '4px',
            color: '#fff396',
          }}
        >
          {month}
        </Box>
        MM
      </Box>
    </Container>
  );
};

const Container = styled(Box)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  padding: 5px;
  width: 300px;
  height: 80px;
  border-radius: 30px;
  backdrop-filter: blur(50px);
  border: 3px solid ${defaultTheme.colors.pink};
  align-items: end;
`;

export default DateBox;
