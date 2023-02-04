import Image from 'next/image';
import styled from 'styled-components';
import styles from './styles/Todo.module.css';

const CommingSoon = styled.div`
  color: #f42c41;
  font-size: 60px;
`;

const Todo = () => {
  return (
    <div className={styles['Todo-container']}>
      <Image src='/images/Computer.png' alt='abcc' width={500} height={500}/>
      <CommingSoon>
        <div>Comming</div>
        <div>soon</div>
        <div>...</div>
      </CommingSoon>
    </div>
  );
};

export default Todo;
