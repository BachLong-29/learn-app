import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import CheckCircleOutlined from '@ant-design/icons/lib/icons/CheckCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/lib/icons/CloseCircleOutlined';
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined';
import { isEmpty } from 'lodash';

enum ActionTypes {
  EDIT = 'edit',
  DELETE = 'delete',
  ACTIVE = 'active',
  DEACTIVATE = 'deactivate',
}

export const buildActionBtns = ({
  data,
  isFormDetail = false,
  router,
  orgId,
  exceWithdraw,
  exceActive,
  exceDeactive,
  exceDelete,
  exceInvite,
  execMerge,
}) => {
  const handleAction = (action: ActionTypes) => async (req: any) => {
    switch (action) {
      case ActionTypes.EDIT:
        // TODO: do action edit
        break;
      case ActionTypes.ACTIVE:
        // TODO: do action active
        break;
      case ActionTypes.DEACTIVATE:
        // TODO: do action deactivate
        break;
      case ActionTypes.DELETE:
        // TODO: do action delete
        break;
      default:
        break;
    }
  };

  return {
    [ActionTypes.EDIT]: {
      content: 'Edit',
      icon: EditOutlined,
      value: ActionTypes.EDIT,
      onOk: (req) => {
        handleAction(ActionTypes.EDIT)(req);
      },
      extraData: data,
    },
    [ActionTypes.ACTIVE]: {
      content: 'Active',
      icon: CheckCircleOutlined,
      value: ActionTypes.ACTIVE,
      modalType: ActionTypes.ACTIVE,
      onOk: (req) => {
        handleAction(ActionTypes.ACTIVE)(req);
      },
      extraData: data,
    },
    [ActionTypes.DEACTIVATE]: {
      content: 'Deactivate',
      icon: CloseCircleOutlined,
      value: ActionTypes.DEACTIVATE,
      modalType: ActionTypes.DEACTIVATE,
      onOk: (req) => {
        handleAction(ActionTypes.DEACTIVATE)(req);
      },
      extraData: data,
    },
    [ActionTypes.DELETE]: {
      content: 'Delete',
      icon: DeleteOutlined,
      value: ActionTypes.DELETE,
      modalType: ActionTypes.DELETE,
      onOk: (req) => {
        handleAction(ActionTypes.DELETE)(req);
      },
      extraData: data,
    },
  };
};

export const renderVendorsAction = ({ objActions }) => {
  const actions: any[] = [];
  if (isEmpty(objActions)) {
    return [];
  }

  actions.push(objActions[ActionTypes.EDIT]);
  actions.push(objActions[ActionTypes.DELETE]);
  actions.push(objActions[ActionTypes.ACTIVE]);
  actions.push(objActions[ActionTypes.DEACTIVATE]);

  return actions;
};
