import React, { useState } from 'react';

import ActionMenu from 'components/Action/ActionMenu';
import ConfirmModal from 'ui-components/Modal/ConfirmModal';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { isEmpty } from 'lodash';
import { useDeleteStudent } from 'core/student/usecase/deleteStudent';
import { useRouter } from 'next/router';

export enum ActionType {
  EDIT = 'edit',
  DELETE = 'delete',
}

const StudentAction = ({ studentId }) => {
  const router = useRouter();
  const { exec: execDeleteStudent } = useDeleteStudent();

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const handleExcuteAction = (type: ActionType) => {
    switch (type) {
      case ActionType.DELETE:
        setIsDeleteModal(true);
        break;
      case ActionType.EDIT:
        router.push(`student/edit/${studentId}`);
      default:
        break;
    }
  };
  const acts = [
    {
      key: ActionType.EDIT,
      content: 'Edit',
      name: 'Edit',
      value: ActionType.EDIT,
      onOk: (req) => handleExcuteAction(ActionType.EDIT),
      icon: <EditOutlined />,
    },
    {
      key: ActionType.DELETE,
      content: 'Delete',
      name: 'Delete',
      type: ActionType.DELETE,
      value: ActionType.DELETE,
      onOk: (req) => handleExcuteAction(ActionType.DELETE),
      icon: <DeleteOutlined />,
    },
  ];

  return (
    <>
      <ActionMenu data={acts} useTranslate />
      <ConfirmModal
        visible={isDeleteModal}
        onCancel={() => setIsDeleteModal(false)}
        onOk={() => {
          execDeleteStudent(studentId);
        }}
        content="Are you sure you want to delete this student ?"
      />
    </>
  );
};

export default StudentAction;
