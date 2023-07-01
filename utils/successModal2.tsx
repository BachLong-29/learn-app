import { Button, Modal } from 'antd';

import { Flex } from 'ui-components/General/Flex';
import RightOutlined from '@ant-design/icons/RightOutlined';
import SVGIcon from 'components/SVGIcon';
import defaultTheme from 'ui-components/theme/theme';

type ModalProps = {
  onOk?: () => void;
};

const SuccessModal = (props: ModalProps) => {
  const { onOk } = props;
  return Modal.success({
    style: { padding: 0 },
    className: 'successModal',
    title: (
      <>
        <SVGIcon
          src="/images/svg/success-icon.svg"
          size={60}
          s={{
            position: 'absolute',
            top: '-32px',
            left: 'calc(50% - 30px)',
          }}
        />
      </>
    ),
    maskStyle: { padding: 0 },
    content: (
      <Flex
        justifyContent="center"
        alignItems="center"
        h={200}
        w={270}
        fontSize="32px"
        color={defaultTheme.colors.dark_blue}
      >
        Success!
      </Flex>
    ),
    width: 270,
    centered: true,
    maskClosable: true,
    footer: (
      <Flex
        background={defaultTheme.colors.success}
        h={100}
        style={{
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          style={{
            padding: '10px',
            width: '150px',
            height: '50px',
            borderRadius: '40px',
          }}
          onClick={() => {
            onOk?.();
            Modal.destroyAll();
          }}
        >
          Go List
          <RightOutlined style={{ fontSize: '12px' }} />
        </Button>
      </Flex>
    ),
    icon: null,
  });
};
export default SuccessModal;
