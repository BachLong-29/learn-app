import Computer from './components/Computer';
import Keyboard from './components/Keyboard';
import React from 'react';
import styled from 'styled-components';
import styles from './styles/Todo.module.css';

const CommingSoon = styled.div`
  position: absolute;
  top: 35%;
  right: 25%;
  color: #f42c41;
  font-size: 39px;
`;

const Todo = () => {
  return (
    <div className={styles['Todo-container']}>
      <Computer />
      <Keyboard />
      <CommingSoon>
        <div>Comming</div>
        <div>soon</div>
        <div>...</div>
      </CommingSoon>
    </div>
  );
};

export default Todo;
