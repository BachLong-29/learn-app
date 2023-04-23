import { $FixType } from '../../../utils/constants';
import React from 'react';
import { Select } from 'antd';
import Wrapper from './Wrapper';
import { genderOptions } from './../../../utils/constants';
import styled from 'styled-components';

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
      <CustomSelect
        style={{ width: '100%', borderRadius: '4px' }}
        options={options}
        placeholder={placeholder}
        {...field}
        onChange={handleChangeValue}
        size="large"
      />
    </Wrapper>
  );
};

const CustomSelect = styled(Select)`
  .ant-select-selector {
    height: 40px;
  }
`;

export default SelectField;
