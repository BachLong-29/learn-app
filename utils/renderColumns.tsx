import { $FixType, Student } from './constants';

import { Button } from 'antd';
import Link from 'next/link';
import User from '../pages/components/User/User';

type columns = {
  data: $FixType[];
  goEditStudent: (id: string) => void;
};
export const renderColumns = (props: columns) => {
  const { goEditStudent } = props;
  return [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 250,
      render: (_: any, record: any) => {
        return <Link href={`/student/detail/${record.id}`}>{record.name}</Link>;
      },
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
