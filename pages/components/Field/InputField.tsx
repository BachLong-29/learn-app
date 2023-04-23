import { $FixType } from '../../../utils/constants';
import { Input } from 'antd';
import React from 'react';
import Wrapper from './Wrapper';

type InputFieldProps = {
  field: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
};

const InputField = (props: InputFieldProps) => {
  const { field, form, placeholder, label, type } = props;
  return (
    <Wrapper label={label}>
      <Input
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
