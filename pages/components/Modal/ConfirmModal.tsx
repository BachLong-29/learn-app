import { Modal } from 'antd';
import React from 'react';

const ConfirmModal = (props: any) => {
  return (
    <Modal
      title="Basic Modal"
      open={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ConfirmModal;
