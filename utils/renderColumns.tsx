import DeleteButton from '../ui/Button/DeleteButton';
import EditButton from '../ui/Button/EditButton';
import React from 'react';
import { Student } from './constants';

type columns = {
  data: Student[];
};
export const renderColumns = (props: columns) => {
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
      render: (_: any, record: { key: React.Key }) => (
        <EditButton id={record.key as string} data={props.data} />
      ),
      width: 20,
    },
    {
      title: '',
      dataIndex: 'delete',
      render: (_: any, record: { key: React.Key }) => (
        <DeleteButton id={record.key as string} />
      ),
      width: 20,
    },
  ];
};
