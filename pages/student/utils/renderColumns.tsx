import Link from 'next/link';
import MenuAction from '../components/Action/MenuAction';
import { NextRouter } from 'next/router';
import { StudentKeyValue } from './StudentKeyValues';

type columns = {
  goEditStudent: (id: string) => void;
  router: NextRouter;
};
export const renderColumns = (props: columns) => {
  const { router } = props;
  return [
    {
      title: 'Full name',
      dataIndex: StudentKeyValue.NAME,
      width: 500,
      render: (_: any, record: any) => {
        return <Link href={`/student/detail/${record.id}`}>{record.name}</Link>;
      },
    },
    {
      title: 'Age',
      dataIndex: StudentKeyValue.AGE,
      width: 100,
    },
    {
      title: 'Gender',
      dataIndex: StudentKeyValue.GENDER,
    },
    {
      title: 'Rank',
      dataIndex: StudentKeyValue.RANK,
    },
    {
      title: 'Nick name',
      dataIndex: StudentKeyValue.NICK_NAME,
    },
    {
      title: '',
      dataIndex: 'edit',
      render: (_: any, record: any) => {
        return (
          // onClick={() => goEditStudent(record.id)}
          // <MenuAction id={record.id} data={record} router={router} />
          <></>
        );
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
