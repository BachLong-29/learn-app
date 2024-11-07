import { Form, Formik } from 'formik';

import { $FixType } from 'utils/constants';
import { Box } from 'ui-components/General/Box';
import StudentFormContent from './StudentFormContent';
import { StudentKeyValue } from 'utils/StudentKeyValues';
import dayjs from '../../../dayjs-config';
import defaultTheme from 'ui-components/theme/theme';
import { memo } from 'react';
import styled from 'styled-components';

interface Props {
  id?: string;
  data?: $FixType;
  isEdit?: boolean;
  renderAction: (value: any) => any;
  renderHeader: React.ReactNode;
}

const StudentForm = (props: Props) => {
  const { data, renderAction, renderHeader } = props;

  // split mapping function to other file
  const initialValues = {
    [StudentKeyValue.NAME]: data?.name,
    [StudentKeyValue.YEAR]: data?.year && dayjs(data?.year),
    [StudentKeyValue.GENDER]: data?.gender ?? 'male',
    [StudentKeyValue.NICK_NAME]: data?.nickname,
    [StudentKeyValue.RANK]: data?.rank,
    [StudentKeyValue.IMAGES]: data?.images,
    [StudentKeyValue.DOB]: data?.dob && dayjs(data?.dob),
    [StudentKeyValue.MAJOR]: data?.major,
    [StudentKeyValue.EMAIL]: data?.email,
    [StudentKeyValue.PHONE]: data?.phone,
    [StudentKeyValue.ADDRESS]: data?.address,
    [StudentKeyValue.DESC]: data?.desc,
  };

  return (
    <Box p="0 20px 0 20px">
      {renderHeader}
      <Formik
        validateOnChange
        initialValues={initialValues}
        onSubmit={() => {}}
      >
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
