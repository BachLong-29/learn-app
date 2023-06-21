import { Button, Dropdown, MenuProps, Space } from 'antd';

import { Box } from 'ui-components/General/Box';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import { NextRouter } from 'next/router';
import React from 'react';
import { action } from './action';
import { useDeleteStudent } from 'pages/student/core/usecase/deleteStudent';
import withAction from './withAction';

const MenuAction = ({
  id,
  data,
  router,
}: {
  id: any;
  data: any;
  router: NextRouter;
}) => {
  const { exec: execDeleteStudent } = useDeleteStudent();
  const items = action(router, id, execDeleteStudent);
  const dropdownItem = items.map((item) => {
    return {
      ...item,
      label: <Box onClick={item.handleAction}>{item.label}</Box>,
    };
  });
  return (
    <>
      <Dropdown
        trigger={['click']}
        menu={{
          items: dropdownItem,
        }}
        arrow
      >
        <Button>
          <EllipsisOutlined />
        </Button>
      </Dropdown>
    </>
  );
};

export default withAction(MenuAction);
