import {
  FastField,
  FieldAttributes,
  FieldConfig,
  useFormikContext,
} from 'formik';
import React, { memo } from 'react';

import { Box } from 'ui-components/General/Box';
import defaultTheme from 'ui-components/theme/theme';

type iField = FieldAttributes<any> & {
  label?: string;
  onChangeValue?: (value: any) => void;
};

const Field = (props: any) => {
  const { name, validate, component, label, isRequired, ...rest } = props;
  const form = useFormikContext<any>();
  const value = form?.values?.[name];
  const errors = form?.errors as any;
  const touched = form?.touched as any;
  if (!form) {
    return <></>;
  }
  return (
    <>
      <FastField
        name={name}
        component={component}
        validate={validate}
        label={label}
        isRequired={isRequired}
        status={touched?.[name] && !!errors?.[name] ? 'error' : undefined}
        {...rest}
      />
      {errors?.[name] && touched?.[name] && (
        <Box ml={8} color={defaultTheme.colors.error}>
          {errors?.[name]}
        </Box>
      )}
    </>
  );
};

export default memo(Field);
