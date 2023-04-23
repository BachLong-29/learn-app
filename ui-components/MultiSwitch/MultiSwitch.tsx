import React, { useState } from 'react';

import { Box } from 'ui-components/General/Box';
import styled from 'styled-components';

type Iprops = {
  options: any[];
  renderOption: (option: any) => React.ReactNode;
  onChange?: (item: any) => void;
};

const MultiSwitch = (props: Iprops) => {
  const { onChange, options, renderOption } = props;
  const [select, setSelect] = useState(0);
  return (
    <Container>
      {options?.map((item, index) => {
        return (
          <Item
            key={index}
            onClick={() => {
              setSelect(index);
              onChange && onChange(item);
            }}
            selected={select === index}
          >
            {renderOption(item)}
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  background: #fff;
  border: 1px solid #d3a5a3;
  border-radius: 4px;
  padding: 4px;
  gap: 8px;
  width: 100%;
`;
const Item = styled(Box)<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.selected ? '#d3a5a3' : '#fff')};
  border-radius: 4px;
  font-weight: 600;
  width: 50%;
  height: 30px;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    background: ${(props) => (props.selected ? '#d3a5a3' : '#f1e0de')};
  }
`;

export default MultiSwitch;
