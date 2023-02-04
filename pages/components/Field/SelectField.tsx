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
    // const changeEvent = {
    //   target: {
    //     name: name,
    //     value: option,
    //   },
    // };
    // field.onChange(changeEvent);
    form.setFieldValue(field?.name || '', option);
  };
  console.log({ field, form });
  return (
    <Wrapper label={label}>
      <Select
        options={options}
        placeholder={placeholder}
        // onChange={(value) =>console.log(value)}
        {...field}
        onChange={handleChangeValue}
      />
    </Wrapper>
  );
};

export default SelectField;
