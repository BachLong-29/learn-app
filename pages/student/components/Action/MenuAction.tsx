import { ActionMenu, IMenuItem } from 'components/Action/MenuAction.';

import { ActionType } from './action';
import { Box } from 'ui-components/General/Box';
import ConfirmModal from 'components/Modal/ConfirmModal';
import { map } from 'lodash';
import { useState } from 'react';
import withAction from './withAction';

const mapActionByStatustoMenuItemData = (actions): IMenuItem[] =>
  map(actions, (action) => {
    return { ...action, name: action.content };
  });

const MenuAction = withAction(({ studentId, data, actionBtns, actions }) => {
  const [actionType, setActionType] = useState<any>(null);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const onClick = ({ key }) => {
    const { type, onOk } = actions[key];
    setActionType(actions[key]);
    if (type) {
      switch (type) {
        case ActionType.DELETE:
          setIsDeleteModal(true);
        default:
          return null;
      }
    }
    onOk({});
  };

  return (
    <>
      <Box
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ConfirmModal
          visible={isDeleteModal}
          onCancel={() => setIsDeleteModal(false)}
          onOk={(req) => {
            actionType?.onOk(req);
          }}
        />
        <ActionMenu
          data={mapActionByStatustoMenuItemData(actionBtns)}
          useTranslate
          onItemSelect={onClick}
        />
      </Box>
      {/* <Dropdown
        trigger={['click']}
        menu={
          {
            // items: dropdownItem,
          }
        }
        arrow
      >
        <Button>
          <EllipsisOutlined />
        </Button>
      </Dropdown> */}
    </>
  );
});

export default MenuAction;
