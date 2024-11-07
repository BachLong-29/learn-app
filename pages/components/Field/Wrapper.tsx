import { Box } from 'ui-components/General/Box';
import React from 'react';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const Wrap = styled(Box)``;
const Validate = styled(Box)`
  font-size: 12px;
  color: #f00;
`;

const Wrapper = (props: any) => {
  const { label, error, children, style, isRequired } = props;
  return (
    <Wrap style={style}>
      <Box textAlign="left" display="flex">
        {isRequired && (
          <Box color={defaultTheme.colors.error} mr={4}>
            *
          </Box>
        )}
        {label}
      </Box>
      {children}
      {/* <Validate>validation</Validate> */}
    </Wrap>
  );
};

export default Wrapper;
