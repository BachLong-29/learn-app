import { Modal, Upload, UploadFile, UploadProps } from 'antd';
import React, { useState } from 'react';

import { Box } from 'ui-components/General/Box';
import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { RcFile } from 'antd/es/upload';
import { getBase64 } from './readImage';

const UploadImages = (props: any) => {
  const { onChange, value } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(value ? value : []);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile & { originImg: string }) => {
    setPreviewImage(file.originImg);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  const handleChange: UploadProps['onChange'] = async ({
    file,
    fileList: newList,
  }: {
    file: any;
    fileList: any;
  }) => {
    if (fileList.length > newList.length) {
      setFileList(newList);
      onChange(newList);
    } else {
      if (!file.url && !file.preview) {
        file.originImg = file.thumbUrl = await getBase64(file as RcFile);
      }
      setFileList((prev) => [...prev, file]);
      onChange([...fileList, file]);
    }
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={1}
        beforeUpload={(file) => {
          return false;
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <Box
          as="img"
          alt="example"
          style={{ width: '100%' }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default UploadImages;
