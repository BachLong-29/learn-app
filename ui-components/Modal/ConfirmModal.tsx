import { Button, Modal } from 'antd';

import ExclamationOutlined from '@ant-design/icons/ExclamationOutlined';
import { Flex } from 'ui-components/General/Flex';
import NegativeButton from 'ui-components/Button/NegativeButton';
import PositiveButton from 'ui-components/Button/PositiveButton';
import RightOutlined from '@ant-design/icons/RightOutlined';
import defaultTheme from 'ui-components/theme/theme';

const ConfirmModal = (props: any) => {
  const { content, onOk, onCancel } = props;
  return (
    <Modal
      closable={false}
      className="confirmation"
      title={
        <>
          <Flex
            style={{
              width: '60px',
              height: '60px',
              position: 'absolute',
              top: '-32px',
              left: 'calc(50% - 30px)',
              background: defaultTheme.colors.dark_blue,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <ExclamationOutlined
              style={{
                fontSize: '40px',
                color: defaultTheme.colors.white,
              }}
            />
          </Flex>
        </>
      }
      maskStyle={{ padding: 0 }}
      open={props.visible}
      onCancel={props.onCancel}
      centered
      maskClosable
      style={{ padding: 0 }}
      footer={
        <Flex
          background={defaultTheme.colors.dark_blue}
          h={100}
          style={{
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
          justifyContent="center"
          alignItems="center"
        >
          <NegativeButton onClick={onCancel}>Cancel</NegativeButton>
          <PositiveButton
            onClick={() => {
              onOk?.();
              Modal.destroyAll();
            }}
          >
            OK
          </PositiveButton>
        </Flex>
      }
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        minHeight={150}
        fontSize="32px"
        color={defaultTheme.colors.dark_blue}
        padding="40px 40px 20px 40px"
      >
        {content}
      </Flex>
    </Modal>
  );
};

export default ConfirmModal;
