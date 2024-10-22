import { $FixType } from '../../../utils/constants';
import MultiSwitch from 'ui-components/MultiSwitch/MultiSwitch';
import Wrapper from './Wrapper';

type MultiSwitchFieldProps = {
  field: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  options?: any[];
};
const MultiSwitchField = (props: MultiSwitchFieldProps) => {
  const { field, form, placeholder, label, options, type } = props;
  const handleChangeValue = (option: any) => {
    form.setFieldValue(field?.name || '', option.value);
  };
  return (
    <Wrapper label={label}>
      <MultiSwitch
        options={options}
        renderOption={(item) => {
          return <>{item.label}</>;
        }}
        {...field}
        onChange={handleChangeValue}
      />
    </Wrapper>
  );
};

export default MultiSwitchField;
