import { FastField, useFormikContext } from 'formik';
import React, { useCallback, useEffect, useMemo } from 'react';
import { genderOptions, majors, rankOptions } from 'utils/constants';

import Banner from 'ui-components/Banner/Banner';
import { Box } from 'ui-components/General/Box';
import DateField from 'components/Field/DateField';
import { DatePicker } from 'antd';
import Field from 'components/Field/Field';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import MultiSwitchField from 'components/Field/MultiSwitchField';
import SelectField from 'components/Field/SelectField';
import { StudentKeyValue } from 'utils/StudentKeyValues';
import TextAreaField from 'components/Field/TextAreaField';
import UploadField from 'components/Field/UploadField';
import dayjs from 'dayjs';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const Grid = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Please enter a valid email address';
  }
  return error;
};

const validatePhoneNumber = (value) => {
  let error;
  if (!value) {
    error = 'Phone number is required';
  } else if (
    !/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(value)
  ) {
    error = 'Please enter a valid phone number';
  }
  return error;
};

const otherFields = [
  {
    key: StudentKeyValue.IMAGES,
    content: (
      <FastField
        name={StudentKeyValue.IMAGES}
        component={UploadField}
        label="Images"
        placeholder="Enter your name"
        validate
      />
    ),
  },
];
const StudentFormContent = (props: any) => {
  const { renderAction } = props;
  const form = useFormikContext<{ images: any; year?: any }>();
  const banner = useMemo(() => {
    return (
      <Banner
        height="100%"
        width="50%"
        styles={{
          background: defaultTheme.colors.dark_blue,
          borderBottomLeftRadius: '24px',
          borderTopLeftRadius: '24px',
        }}
        image={
          form?.values?.images?.[0]?.originImg &&
          form?.values?.images?.[0]?.originImg
        }
      />
    );
  }, [JSON.stringify(form?.values)]);

  useEffect(() => {
    if (
      form?.values[StudentKeyValue.MAJOR] &&
      form?.values[StudentKeyValue.YEAR]
    ) {
      form.setFieldValue(
        StudentKeyValue.CLASS,
        `${majors?.[form?.values[StudentKeyValue.MAJOR]]?.key}-${dayjs(
          form?.values[StudentKeyValue.YEAR]
        ).year()}`,
        true
      );
    }
  }, [form?.values[StudentKeyValue.MAJOR], form?.values[StudentKeyValue.YEAR]]);

  const fields: {
    key: string;
    content: React.ReactNode;
    rowSpan?: string;
    columnSpan?: string;
  }[] = useMemo(() => {
    return [
      {
        key: StudentKeyValue.STUDENT_ID,
        content: (
          <FastField
            name={StudentKeyValue.STUDENT_ID}
            component={InputField}
            label="Student ID"
            placeholder="Enter student ID"
          />
        ),
      },
      {
        key: StudentKeyValue.NAME,
        content: (
          <Field
            name={StudentKeyValue.NAME}
            component={InputField}
            label="Name"
            placeholder="Enter student's name"
            validate
          />
        ),
      },
      {
        key: StudentKeyValue.YEAR,
        content: (
          <Field
            name={StudentKeyValue.YEAR}
            component={DateField}
            label="Year"
            placeholder="Select student's year"
            picker="year"
          />
        ),
      },
      {
        key: StudentKeyValue.GENDER,
        content: (
          <FastField
            name={StudentKeyValue.GENDER}
            component={MultiSwitchField}
            label="Gender"
            options={genderOptions}
            placeholder="Select student's gender"
          />
        ),
      },
      {
        key: StudentKeyValue.NICK_NAME,
        content: (
          <FastField
            name={StudentKeyValue.NICK_NAME}
            component={InputField}
            label="Nickname"
            placeholder="Enter student's nickname"
          />
        ),
      },
      {
        key: StudentKeyValue.RANK,
        content: (
          <FastField
            name={StudentKeyValue.RANK}
            component={SelectField}
            label="Rank"
            options={rankOptions}
            placeholder="Select student's rank"
          />
        ),
      },
      {
        key: StudentKeyValue.DOB,
        content: (
          <FastField
            name={StudentKeyValue.DOB}
            component={DateField}
            label="Date of birth"
            placeholder="Select date of birth"
          />
        ),
      },
      {
        key: StudentKeyValue.PHONE,
        content: (
          <Field
            name={StudentKeyValue.PHONE}
            component={InputField}
            label="Phone"
            placeholder="Enter phone"
            validate={validatePhoneNumber}
            isRequired
          />
        ),
      },
      {
        key: StudentKeyValue.EMAIL,
        content: (
          <Field
            name={StudentKeyValue.EMAIL}
            component={InputField}
            label="Email"
            placeholder="Enter email"
            validate={validateEmail}
          />
        ),
      },
      {
        key: StudentKeyValue.ADDRESS,
        content: (
          <FastField
            name={StudentKeyValue.ADDRESS}
            component={InputField}
            label="Address"
            placeholder="Enter address"
          />
        ),
      },

      {
        key: StudentKeyValue.MAJOR,
        content: (
          <Field
            name={StudentKeyValue.MAJOR}
            component={SelectField}
            options={Object.values(majors).map((item) => ({
              value: item.value,
              label: item.label,
            }))}
            label="Major"
            placeholder="Select major"
            isRequired
          />
        ),
      },
      {
        key: StudentKeyValue.CLASS,
        content: (
          <Field
            name={StudentKeyValue.CLASS}
            component={InputField}
            label="Class"
            disabled
          />
        ),
      },
      {
        key: StudentKeyValue.DESC,
        content: (
          <FastField
            name={StudentKeyValue.DESC}
            component={TextAreaField}
            label="Description"
            placeholder="Enter description"
          />
        ),
        columnSpan: '1 / span 2',
      },
    ];
  }, [form]);

  if (!form) {
    return <></>;
  }
  return (
    <>
      {banner}
      <Flex flexDirection="column" justifyContent="space-between" w="100%">
        <Grid>
          {fields.map((item) => (
            <Box
              key={item.key}
              style={{
                gridColumn: item.columnSpan,
                gridRow: item.rowSpan,
              }}
            >
              {item.content}
            </Box>
          ))}
        </Grid>
        <Grid>
          {otherFields.map((item) => (
            <Box key={item.key}> {item.content}</Box>
          ))}
        </Grid>
        {renderAction && renderAction(form)}
      </Flex>
    </>
  );
};

export default StudentFormContent;
