import { useDispatch, useSelector } from 'react-redux';

import { Box } from 'ui-components/General/Box';
import CreateButton from 'ui-components/Button/CreateButton';
import { Table } from 'antd';
import { Title } from 'utils/styles/general';
import { getAllStudent } from '../../../redux/actions/student.action';
import getStudentCols from 'core/student/utils/getStudentCols';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withPage from 'components/withPage';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const List = () => {
  const router = useRouter();
  const studentList = useSelector((state: any) => state.student);

  const goCreateStudent = () => {
    router.push('/student/create');
  };

  const columns = getStudentCols({});
  const renderHeader = () => {
    return (
      <Flex>
        <Title>Student Board</Title>
        <CreateButton onClick={goCreateStudent} />
      </Flex>
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudent());
  }, []);
  return (
    <Box p="0 20px 0 20px">
      {renderHeader()}
      <Table
        bordered
        columns={columns}
        dataSource={studentList}
        pagination={{ pageSize: 19 }}
      />
    </Box>
  );
};

export default withPage(List);
