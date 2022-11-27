import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  position: relative;
  height: 100vh;
  padding: 4px 12px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxIcon = styled.div<{ isSelected?: boolean }>`
  font-size: 20px;
  margin-bottom: 20px;
  background: ${(props) => (props.isSelected ? '#ff4e8e' : undefined)};
  padding: 5px 10px 8px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background: ${(props) =>
      props.isSelected ? '#ff4e8e' : ' rgba(0, 0, 0, 0.5)'};
  }
`;
