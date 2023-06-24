import { Button, Modal } from 'antd';
import React, { useState } from 'react';

import { Flex } from 'ui-components/General/Flex';
import RightOutlined from '@ant-design/icons/RightOutlined';
import SVGIcon from 'components/SVGIcon';
import defaultTheme from 'ui-components/theme/theme';
import { useRouter } from 'next/router';

const SuccessModal = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Modal
        open={visible}
        style={{ padding: 0 }}
        className="successModal"
        title={
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
        }
        maskStyle={{ padding: 0 }}
        width={270}
        centered
        footer={
          <Flex
            background="#8ddaaa"
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
                router.push('/student');
                setVisible(false);
              }}
            >
              Go List
              <RightOutlined style={{ fontSize: '12px' }} />
            </Button>
          </Flex>
        }
      >
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
      </Modal>
    </>
  );
};

export default SuccessModal;
