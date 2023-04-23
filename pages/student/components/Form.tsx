import { $FixType, genderOptions, rankOptions } from 'utils/constants';
import { FastField, Form, Formik } from 'formik';

import Banner from 'ui-components/Banner/Banner';
import { Box } from 'ui-components/General/Box';
import { Button } from 'antd';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import MultiSwitchField from '../../components/Field/MultiSwitchField';
import NegativeButton from 'ui-components/Button/NegativeButton';
import PositiveButton from 'ui-components/Button/PositiveButton';
import SelectField from 'components/Field/SelectField';
import defaultTheme from 'ui-components/theme/theme';
import { memo } from 'react';
import studentApi from '../../api/studentService';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

interface Props {
  id?: string;
  data?: $FixType;
  isEdit?: boolean;
}

const FormStudent = (props: Props) => {
  const { data, isEdit = false } = props;
  const router = useRouter();

  const initialValues = {
    name: data?.name,
    age: data?.age,
    gender: data?.gender ?? 'male',
    nickname: data?.nickname,
    rank: data?.rank,
  };
  const handleSubmit = (data: $FixType) => {
    const id = uuid();
    studentApi.createStudent({
      id: id,
      name: data.name,
      age: data.age,
      gender: data.gender,
      nickname: data.nickname,
      rank: data.rank,
    });
    router.push('/student');
  };
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
  return (
    <Box p="0 50px" mt="20px">
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => handleSubmit(data)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          return (
            <Form>
              <Wrapper>
                <Banner
                  height="100%"
                  width="30%"
                  styles={{ background: defaultTheme.colors.dark_blue }}
                />
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Grid>{renderFields.map((item) => item.content)}</Grid>
                  <FormFooter>
                    <NegativeButton>Cancel</NegativeButton>
                    <PositiveButton>Save</PositiveButton>
                  </FormFooter>
                </Flex>
              </Wrapper>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
const Grid = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;
const Wrapper = styled(Box)`
  display: flex;
  border: 2px ${defaultTheme.colors.dark_blue} solid;
  border-radius: 5px;
  height: calc(100vh - 127px);
`;
const FormFooter = styled(Flex)`
  background: ${defaultTheme.colors.white};
  border-end-end-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 40px;
`;
export default memo(FormStudent);
