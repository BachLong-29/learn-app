import React, { CSSProperties } from 'react';

import { $FixType } from '../../../utils/constants';
import { Input } from 'antd';
import Wrapper from './Wrapper';
import UploadImages from 'ui-components/Upload/UploadImages';

type UploadFieldProps = {
  field?: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  wrapperStyle?: CSSProperties;
};

const UploadField = (props: UploadFieldProps) => {
  const { field, form, placeholder, label, type, wrapperStyle } = props;
  console.log({ field });
  const handleChangeValue = (option: any) => {
    form.setFieldValue(field?.name || '', option);
  };
  return (
    <Wrapper label={label} style={wrapperStyle}>
      <UploadImages {...field} onChange={handleChangeValue} />
    </Wrapper>
  );
};

export default UploadField;
