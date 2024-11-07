import React, { CSSProperties } from 'react';

import { $FixType } from '../../../utils/constants';
import { Input } from 'antd';
import Wrapper from './Wrapper';

const { TextArea } = Input;

type InputFieldProps = {
  field?: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  wrapperStyle?: CSSProperties;
};

const TextAreaField = (props: InputFieldProps) => {
  const { field, form, placeholder, label, type, wrapperStyle } = props;
  return (
    <Wrapper label={label} style={wrapperStyle}>
      <TextArea
        autoComplete="off"
        style={{ borderRadius: '4px' }}
        size="large"
        placeholder={placeholder}
        type={type}
        autoSize={{ minRows: 5, maxRows: 5 }}
        {...field}
      />
    </Wrapper>
  );
};

export default TextAreaField;
