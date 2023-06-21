import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { NextRouter } from 'next/router';
import studentApi from 'pages/api/studentService';

export const action = (
  router: NextRouter,
  id: string,
  execDeleteStudent: (id: string) => void
): {
  key: string;
  label: string;
  actionType?: string;
  handleAction?: any;
  icon?: any;
}[] => {
  const handleExcuteAction = (type: string) => {
    switch (type) {
      case 'delete':
        execDeleteStudent(id);
        break;
      case 'edit':
        router.push(`student/edit/${id}`);
      default:
        break;
    }
  };
  return [
    {
      key: 'delete',
      label: 'Delete',
      actionType: 'delete',
      handleAction: () => handleExcuteAction('delete'),
      icon: <EditOutlined />,
    },
    {
      key: 'edit',
      label: 'Edit',
      actionType: 'edit',
      handleAction: () => handleExcuteAction('edit'),
      icon: <DeleteOutlined />,
    },
  ];
};
