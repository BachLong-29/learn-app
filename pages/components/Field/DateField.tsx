import { DatePicker, Select } from 'antd';

import { $FixType } from '../../../utils/constants';
import Wrapper from './Wrapper';
import styled from 'styled-components';
import { useCallback } from 'react';

type DateFieldProps = {
  field: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  options?: any[];
  onChangeValue?: (value: any) => void;
};
const DateField = (props: DateFieldProps) => {
  const { field, form, placeholder, label, onChangeValue, ...rest } = props;
  const handleChangeValue = useCallback(
    (value: string) => {
      form.setFieldValue(field?.name || '', value, true);
      onChangeValue && onChangeValue(value);
    },
    [JSON.stringify(form?.values), onChangeValue]
  );
  return (
    <Wrapper label={label}>
      <CustomSelect
        style={{ width: '100%', borderRadius: '4px' }}
        placeholder={placeholder}
        {...field}
        onChange={handleChangeValue}
        size="large"
        {...rest}
      />
    </Wrapper>
  );
};

const CustomSelect = styled(DatePicker)`
  .ant-picker {
    height: 40px;
  }
`;

export default DateField;
