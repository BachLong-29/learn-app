import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import LiveView from './LiveView';
import { Table } from 'antd';
import { getAllStudent } from '../../../redux/actions/student.action';
import getStudentCols from '../utils/getStudentCols';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const List = () => {
  const router = useRouter();
  const studentList = useSelector((state: any) => state.student);
  const [viewType, setViewType] = useState('live');

  const goCreateStudent = () => {
    router.push('/student/create');
  };

  const columns = getStudentCols({});
  const onSwitch = (type) => {
    setViewType(type);
  };
  const renderHeader = () => {
    return (
      <Flex justifyContent="space-between">
        <Flex>
          <Button
            onClick={() => onSwitch('live')}
            style={{ marginRight: '4px' }}
          >
            live
          </Button>
          <Button onClick={() => onSwitch('nor')}>nor</Button>
          <Title>Student Board</Title>
        </Flex>
        <Box>
          <Button onClick={goCreateStudent}>Create</Button>
        </Box>
      </Flex>
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStudent());
  }, []);

  return (
    <Box p="20px" h="70vh">
      {renderHeader()}
      {viewType === 'nor' && (
        <Table
          bordered
          columns={columns}
          dataSource={studentList}
          pagination={{ pageSize: 18 }}
        />
      )}
      <Flex alignItems="center" justifyContent="center" h="80%">
        {viewType === 'live' && <LiveView dataSource={studentList} />}
      </Flex>
      <Box textAlign="center" fontSize="60px">
        Student Board
      </Box>
    </Box>
  );
};

export default List;
