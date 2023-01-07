import { Button } from 'antd';
import { Student } from './constants';

type columns = {
  data: Student[];
  goEditStudent: (id: string) => void;
};
export const renderColumns = (props: columns) => {
  const { goEditStudent } = props;
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: 150,
    },
    {
      title: '',
      dataIndex: 'edit',
      render: (_: any, record: any) => {
        return <Button onClick={() => goEditStudent(record.id)}>edit</Button>;
      },
      width: 20,
    },
    // {
    //   title: '',
    //   dataIndex: 'delete',
    //   render: (_: any, record: { id: any }) => (
    //     <DeleteButton id={record.id as string} />
    //   ),
    //   width: 20,
    // },
  ];
};
