import React, { CSSProperties } from 'react';

import { $FixType } from '../../../utils/constants';
import { Input } from 'antd';
import Wrapper from './Wrapper';

type InputFieldProps = {
  field?: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  wrapperStyle?: CSSProperties;
};

const InputField = (props: InputFieldProps) => {
  const { field, form, placeholder, label, type, wrapperStyle } = props;
  return (
    <Wrapper label={label} style={wrapperStyle}>
      <Input
        autoComplete="off"
        style={{ borderRadius: '4px' }}
        size="large"
        placeholder={placeholder}
        type={type}
        {...field}
      />
    </Wrapper>
  );
};

export default InputField;
