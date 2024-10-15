import Link from 'next/link';
import { NextRouter } from 'next/router';
import { StudentKeyValue } from 'utils/StudentKeyValues';

type columns = {};
const getStudentCols = (props: columns) => {
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
        return <></>;
        // <MenuAction studentId={record.id} data={record} />;
      },
      width: 20,
    },
  ];
};

export default getStudentCols;
