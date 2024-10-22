import { Flex } from 'ui-components/General/Flex';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';
import { useState } from 'react';

const CreateButton = ({ onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <Container
        onClick={onClick}
        isHover={isHover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Circle isHover={isHover}>
          <PlusOutlined
            style={{
              color: defaultTheme.colors.pink_0,
              fontSize: 16,
            }}
          />
        </Circle>
        <LabelBehind isHover={isHover}>New</LabelBehind>
      </Container>
    </>
  );
};

const Container = styled(Flex)<{ isHover?: boolean }>`
  /* position: fixed; */
  /* bottom: 30px;
  right: 30px; */
  width: ${(props) => (props.isHover ? '100px' : '40px')};
  transition: 100ms;
  background-color: ${(props) =>
    props.isHover ? defaultTheme.colors.dark_blue : 'transparent'};
  border-radius: 50px;
  cursor: pointer;
`;
const Circle = styled(Flex)<{ isHover?: boolean }>`
  position: relative;
  left: ${(props) => (props.isHover ? '35px' : '0px')};
  background-color: ${defaultTheme.colors.dark_blue};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isHover ? 1 : 0.5)};
  transform: ${(props) =>
    props.isHover ? ' translateX(-40px) rotate(-90deg)' : undefined};
  transition: 1s;
`;
const LabelBehind = styled(Flex)<{ isHover?: boolean }>`
  display: ${(props) => (props.isHover ? 'flex' : 'none')};
  align-items: center;
  transition: 1s;
  justify-content: center;
  color: ${defaultTheme.colors.pink_0};
  text-wrap: nowrap;
`;

export default CreateButton;
