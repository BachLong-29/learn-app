import { $FixType } from '../../../utils/constants';
import React from 'react';
import { Select } from 'antd';
import Wrapper from './Wrapper';
import { genderOptions } from './../../../utils/constants';

type SelectFieldProps = {
  field: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  options?: any[];
};
const SelectField = (props: SelectFieldProps) => {
  const { field, form, placeholder, label, options, type } = props;
  const handleChangeValue = (option: string) => {
    form.setFieldValue(field?.name || '', option);
  };
  return (
    <Wrapper label={label}>
      <Select
        options={options}
        placeholder={placeholder}
        {...field}
        onChange={handleChangeValue}
        style={{ width: '100%' }}
      />
    </Wrapper>
  );
};

export default SelectField;
