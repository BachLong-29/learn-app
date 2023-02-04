import { $FixType, genderOptions, rankOptions } from 'utils/constants';
import { FastField, Form, Formik } from 'formik';

import InputField from 'components/Field/InputField';
import SelectField from 'components/Field/SelectField';
import { memo } from 'react';
import studentApi from './../../../api/studentService';
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
    gender: data?.gender,
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
          component={SelectField}
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
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => handleSubmit(data)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          return (
            <Form>
              <Grid>
                {renderFields.map((item) => item.content)}
                <button type="submit">Submit</button>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
export default memo(FormStudent);
