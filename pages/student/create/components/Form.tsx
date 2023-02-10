import { $FixType, genderOptions, rankOptions } from 'utils/constants';
import { FastField, Form, Formik } from 'formik';

import Banner from 'ui-components/Banner/Banner';
import { Box } from 'ui-components/General/Box';
import InputField from 'components/Field/InputField';
import MultiSwitch from 'ui-components/MultiSwitch/MultiSwitch';
import SelectField from 'components/Field/SelectField';
import { memo } from 'react';
import studentApi from './../../../api/studentService';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';
import MultiSwitchField from './../../../components/Field/MultiSwitchField';

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
                {/* <Box h="100%" w="40%" background="#393d52"></Box> */}
                <Banner
                  height="100%"
                  width="40%"
                  styles={{ background: '#393d52' }}
                  chilren={<Box>Banner</Box>}
                />
                <Grid>
                  {renderFields.map((item) => item.content)}
                  {/* <button type="submit">Submit</button> */}
                </Grid>
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
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`;
const Wrapper = styled(Box)`
  display: flex;
  border: 2px #393d52 solid;
  border-radius: 5px;
  height: calc(100vh - 127px);
`;
export default memo(FormStudent);
