import { $FixType } from '../../../utils/constants';
import { CSSProperties } from 'react';
import UploadImages from 'ui-components/Upload/UploadImages';
import Wrapper from './Wrapper';

type UploadFieldProps = {
  field?: $FixType;
  form?: $FixType;
  type?: string;
  placeholder?: string;
  disable?: boolean;
  label?: string;
  wrapperStyle?: CSSProperties;
};

const UploadField = (props: UploadFieldProps) => {
  const { field, form, placeholder, label, type, wrapperStyle } = props;
  const handleChangeValue = (option: any) => {
    form.setFieldValue(field?.name || '', option);
  };
  return (
    <Wrapper label={label} style={wrapperStyle}>
      <UploadImages {...field} onChange={handleChangeValue} />
    </Wrapper>
  );
};

export default UploadField;
