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
  isRequired?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const {
    field,
    form,
    placeholder,
    label,
    type,
    wrapperStyle,
    isRequired,
    ...rest
  } = props;
  return (
    <Wrapper label={label} style={wrapperStyle} isRequired={isRequired}>
      <Input
        autoComplete="off"
        style={{ borderRadius: '4px' }}
        size="large"
        placeholder={placeholder}
        type={type}
        {...field}
        {...rest}
      />
    </Wrapper>
  );
};

export default InputField;
