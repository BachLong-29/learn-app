import { Box } from 'ui-components/General/Box';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div``;
const Validate = styled(Box)`
  font-size: 12px;
  color: #f00;
`;

const Wrapper = (props: any) => {
  const { label, error, children } = props;
  return (
    <Wrap>
      <Box textAlign="left">{label}</Box>
      {children}
      {/* <Validate>validation</Validate> */}
    </Wrap>
  );
};

export default Wrapper;
