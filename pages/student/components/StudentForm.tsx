import { Form, Formik } from 'formik';

import { $FixType } from 'utils/constants';
import { Box } from 'ui-components/General/Box';
import StudentFormContent from './StudentFormContent';
import { Title } from 'utils/styles/general';
import defaultTheme from 'ui-components/theme/theme';
import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  id?: string;
  data?: $FixType;
  isEdit?: boolean;
  renderAction: (value: any) => any;
}

const StudentForm = (props: Props) => {
  const { data, renderAction } = props;
  // split mapping function to other file

  const initialValues = {
    name: data?.name,
    age: data?.age,
    gender: data?.gender ?? 'male',
    nickname: data?.nickname,
    rank: data?.rank,
    images: data?.images,
  };
  const renderHeader = () => {
    return (
      <Flex>
        <Title>Create student</Title>
      </Flex>
    );
  };
  return (
    <Box p="0 20px 0 20px">
      {renderHeader()}
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {(form) => {
          return (
            <Form>
              <Wrapper>
                <StudentFormContent renderAction={renderAction} />
              </Wrapper>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

const Wrapper = styled(Box)`
  display: flex;
  border: 2px ${defaultTheme.colors.dark_blue} solid;
  border-radius: 30px;
  height: calc(100vh - 180px);
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export default memo(StudentForm);
