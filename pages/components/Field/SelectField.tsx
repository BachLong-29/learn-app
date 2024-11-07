import { $FixType } from '../../../utils/constants';
import { Select } from 'antd';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import { useCallback } from 'react';

type SelectFieldProps = {
  field: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  options?: any[];
  onChangeValue?: (value: any) => void;
  isRequired?: boolean;
};
const SelectField = (props: SelectFieldProps) => {
  const {
    field,
    form,
    placeholder,
    label,
    options,
    isRequired,
    type,
    onChangeValue,
  } = props;
  const handleChangeValue = useCallback(
    (option: string) => {
      form.setFieldValue(field?.name || '', option, true);
      onChangeValue && onChangeValue(option);
    },
    [form?.value, form, onChangeValue]
  );
  return (
    <Wrapper label={label} isRequired={isRequired}>
      <CustomSelect
        style={{ width: '100%', borderRadius: '4px' }}
        options={options}
        placeholder={placeholder}
        size="large"
        {...field}
        onChange={handleChangeValue}
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
