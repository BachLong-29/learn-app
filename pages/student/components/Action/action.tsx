import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import { isEmpty } from 'lodash';

export enum ActionType {
  EDIT = 'edit',
  DELETE = 'delete',
}

type ActionProps = {
  key: ActionType;
  label: string;
  type?: string;
  handleAction?: any;
  icon?: any;
};

export const buildAction = ({ studentId, router, execDeleteStudent }) => {
  const handleExcuteAction = (type: ActionType) => {
    switch (type) {
      case ActionType.DELETE:
        execDeleteStudent(studentId);
        break;
      case ActionType.EDIT:
        router.push(`student/edit/${studentId}`);
      default:
        break;
    }
  };
  return {
    [ActionType.EDIT]: {
      key: ActionType.EDIT,
      content: 'Edit',
      value: ActionType.EDIT,
      onOk: (req) => handleExcuteAction(ActionType.EDIT),
      icon: <EditOutlined />,
    },
    [ActionType.DELETE]: {
      key: ActionType.DELETE,
      content: 'Delete',
      type: ActionType.DELETE,
      value: ActionType.DELETE,
      onOk: (req) => handleExcuteAction(ActionType.DELETE),
      icon: <DeleteOutlined />,
    },
  };
};

export const buildActionItems = ({ studentActions }) => {
  const actions: any[] = [];
  if (isEmpty(studentActions)) {
    return [];
  }
  actions.push(studentActions[ActionType.EDIT]);
  actions.push(studentActions[ActionType.DELETE]);

  return actions;
};
