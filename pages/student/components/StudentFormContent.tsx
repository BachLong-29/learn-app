import { FastField, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { genderOptions, rankOptions } from 'utils/constants';

import Banner from 'ui-components/Banner/Banner';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import MultiSwitchField from 'components/Field/MultiSwitchField';
import SelectField from 'components/Field/SelectField';
import UploadField from 'components/Field/UploadField';
import defaultTheme from 'ui-components/theme/theme';
import styled from 'styled-components';

const Grid = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;
const renderFields = [
  {
    key: 'name',
    content: (
      <FastField
        name="name"
        component={InputField}
        label="Name"
        placeholder="Enter your name"
        validate
      />
    ),
  },
  {
    key: 'age',
    content: (
      <FastField
        name="age"
        component={InputField}
        label="Age"
        type="number"
        placeholder="Enter your age"
      />
    ),
  },
  {
    key: 'gender',
    content: (
      <FastField
        name="gender"
        component={MultiSwitchField}
        label="Gender"
        options={genderOptions}
        placeholder="Select gender"
      />
    ),
  },
  {
    key: 'nickname',
    content: (
      <FastField
        name="nickname"
        component={InputField}
        label="Nickname"
        placeholder="Enter your nickname"
      />
    ),
  },
  {
    key: 'rank',
    content: (
      <FastField
        name="rank"
        component={SelectField}
        label="Rank"
        options={rankOptions}
        placeholder="Select rank"
      />
    ),
  },
];
const renderOtherFields = [
  {
    key: 'images',
    content: (
      <FastField
        name="images"
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
  const form = useFormikContext<{ images: any }>();
  const banner = useMemo(() => {
    return (
      <Banner
        height="100%"
        width="30%"
        styles={{ background: defaultTheme.colors.dark_blue }}
        image={
          form?.values?.images?.[0]?.originImg &&
          form?.values?.images?.[0]?.originImg
        }
      />
    );
  }, [JSON.stringify(form?.values)]);
  if (!form) {
    return <></>;
  }

  return (
    <>
      {banner}
      <Flex flexDirection="column" justifyContent="space-between" w="100%">
        <Grid>{renderFields.map((item) => item.content)}</Grid>
        <Grid>{renderOtherFields.map((item) => item.content)}</Grid>
        {renderAction && renderAction(form)}
      </Flex>
    </>
  );
};

export default StudentFormContent;
