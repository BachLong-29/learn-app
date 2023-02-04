import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  /* justify-content: center;
  align-items: center; */
  gap: 8px;
`;

const Wrapper = (props: any) => {
  return (
    <Wrap>
      <div style={{ textAlign: 'right' }}>{props.label}: </div>
      {props.children}
    </Wrap>
  );
};

export default Wrapper;
