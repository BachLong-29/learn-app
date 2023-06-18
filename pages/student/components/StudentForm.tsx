import { $FixType, genderOptions, rankOptions } from 'utils/constants';
import { FastField, Form, Formik } from 'formik';

import Banner from 'ui-components/Banner/Banner';
import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import InputField from 'components/Field/InputField';
import MultiSwitchField from '../../components/Field/MultiSwitchField';
import SelectField from 'components/Field/SelectField';
import defaultTheme from 'ui-components/theme/theme';
import { memo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

interface Props {
  id?: string;
  data?: $FixType;
  isEdit?: boolean;
  renderAction: (value: any) => any;
}

const StudentForm = (props: Props) => {
  const { data, renderAction } = props;
  console.log({ renderAction });
  // split mapping function to other file
  const initialValues = {
    name: data?.name,
    age: data?.age,
    gender: data?.gender ?? 'male',
    nickname: data?.nickname,
    rank: data?.rank,
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
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {(form) => {
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
                  {renderAction && renderAction(form)}
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

export default memo(StudentForm);
