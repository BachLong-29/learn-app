import { Table } from 'antd';
import { renderColumns } from '../../../utils/renderColumns';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Container = styled.div`
  padding: 20px;
`;
const Button = styled.div`
  background: #ff4e8e;
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
const Title = styled.div`
  padding: 4px 12px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const List = () => {
  const router = useRouter();
  const studentRedux = useSelector((state: any) => state.student);

  const goCreateStudent = () => {
    router.push('/student/create');
  };
  const goEditStudent = (id: string) => {
    router.push(`student/edit/${id}`);
  };
  const columns = renderColumns({
    data: studentRedux,
    goEditStudent: goEditStudent
  });
  const renderHeader = () => {
    return (
      <Flex>
        <Title>Student Board</Title>
        <Button onClick={goCreateStudent}>Create</Button>
      </Flex>
    );
  };
  return (
    <Container>
      {renderHeader()}
      <Table bordered columns={columns} dataSource={studentRedux} />
    </Container>
  );
};

export default List;
