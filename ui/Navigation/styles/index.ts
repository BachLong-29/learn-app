import styled from 'styled-components';

export const Container = styled.div<{ isOpen?: boolean }>`
  width: ${(props) => (props.isOpen ? '240px' : '100px')};
  position: relative;
  height: 100vh;
  /* padding: 4px 12px; */
  color: #fff;
  background: #00f;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(-45px);
  border-radius: 25px;
  padding-right: 10px;
  transition: 500ms;
`;

export const BoxIcon = styled.div<{ isSelected?: boolean; isOpen?: boolean }>`
  display: flex;
  transition: 500ms;
  width: ${(props) => (props.isOpen ? '130px' : undefined)};
  font-size: 20px;
  margin-bottom: 20px;
  background: ${(props) => (props.isSelected ? '#fff' : undefined)};
  padding: 5px 7px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.isSelected ? '#fff' : ' rgba(255, 255, 255, 0.2)'};
  }
`;
