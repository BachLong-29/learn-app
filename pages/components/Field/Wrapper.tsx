import { Box } from 'ui-components/General/Box';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled(Box)``;
const Validate = styled(Box)`
  font-size: 12px;
  color: #f00;
`;

const Wrapper = (props: any) => {
  const { label, error, children, style } = props;
  return (
    <Wrap style={style}>
      <Box textAlign="left">{label}</Box>
      {children}
      {/* <Validate>validation</Validate> */}
    </Wrap>
  );
};

export default Wrapper;
