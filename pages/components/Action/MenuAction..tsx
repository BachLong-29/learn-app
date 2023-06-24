import { Button, Divider, Dropdown, Menu } from 'antd';
import { isValidElement, useCallback, useMemo } from 'react';

import { Box } from 'ui-components/General/Box';
import DownOutlined from '@ant-design/icons/DownOutlined';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import { Flex } from 'ui-components/General/Flex';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

const MenuDivider = styled(Divider)`
  margin: 0;
`;

export interface IMenuItem {
  value: any;
  name?: string;
  // icon?: AtalinkIconName | React.ReactNode | React.Component | React.FC;
  icon?: any;
  desc?: string;
  colorIcon?: string;
  render?: (value: string, item: IMenuItem, selected: any) => void;
  useTranslate?: boolean;
  disabled?: boolean;
}

interface ActionMenuProps {
  data: IMenuItem[];
  useTranslate: boolean;
  onItemSelect?: (any: any) => void;
  dropdownComponent?: () => React.ReactNode;
  getPopupContainer?: (triggerNode: any) => HTMLElement;
  layout?: 'icon' | 'button';
}

export const ActionMenu = ({
  data,
  useTranslate,
  onItemSelect,
  dropdownComponent,
  getPopupContainer,
  layout = 'icon',
}: ActionMenuProps) => {
  const handleItemSelect = useCallback(
    (data: any) => {
      onItemSelect?.(data);
    },
    [onItemSelect]
  );

  const menu = useMemo(
    () => (
      <Menu onClick={handleItemSelect}>
        {data.map((item, index) => {
          const ItemIcon = item.icon as React.FC;
          return (
            <>
              <Menu.Item
                key={item.value}
                icon={
                  !!item.icon && (
                    <Box as="span" mr={2}>
                      {typeof item.icon === 'string' ? (
                        // <AtalinkIcon
                        //   center
                        //   // width={20}
                        //   name={item.icon as AtalinkIconName}
                        // />
                        item.icon
                      ) : isValidElement(item.icon) ? (
                        item.icon
                      ) : (
                        <ItemIcon />
                      )}
                    </Box>
                  )
                }
                disabled={item.disabled}
              >
                {useTranslate && item.name ? item.name : item.name}
              </Menu.Item>
              {data.length !== index + 1 ? <MenuDivider /> : null}
            </>
          );
        })}
      </Menu>
    ),
    [data, handleItemSelect]
  );

  if (isEmpty(data)) {
    return <Box w="35px" />;
  }
  return (
    <Dropdown
      placement="bottomRight"
      trigger={['click']}
      overlay={menu}
      // getPopupContainer={
      //   getPopupContainer
      //     ? getPopupContainer
      //     : () => document.getElementById(MyTaskContentId)!
      // }
    >
      {dropdownComponent ? (
        dropdownComponent()
      ) : (
        <Flex
          color="textDefault"
          alignItems="center"
          justifyContent="center"
          style={{ cursor: 'pointer' }}
        >
          {layout === 'icon' && (
            <EllipsisOutlined style={{ fontSize: '16px' }} />
          )}
          {layout === 'button' && (
            <Button
              style={{ right: '8px', borderRadius: '4px', padding: '0 20px' }}
              size="small"
            >
              Action
              <DownOutlined style={{ fontSize: 10 }} />
            </Button>
          )}
        </Flex>
      )}
    </Dropdown>
  );
};

ActionMenu.defaultProps = {};
