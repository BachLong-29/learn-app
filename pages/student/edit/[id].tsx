import { errorModal, successModal } from 'components/Modal/SuccessModal';

import { Flex } from 'ui-components/General/Flex';
import NegativeButton from 'ui-components/Button/NegativeButton';
import PositiveButton from 'ui-components/Button/PositiveButton';
import StudentForm from '../components/StudentForm';
import defaultTheme from 'ui-components/theme/theme';
import { editStudentRedux } from 'redux/actions/student.action';
import studentApi from '../../api/studentService';
import styled from 'styled-components';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

type EditProps = {
  data: any;
  id: string;
};
const EditPage = (props: EditProps) => {
  const { data, id } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (data: any) => {
    const mappingData = {
      name: data.name,
      age: data.age,
      gender: data.gender,
      nickname: data.nickname,
      rank: data.rank,
      images: data.images,
    };
    studentApi
      .updateStudent(id, mappingData)
      .then(() => {
        dispatch(
          editStudentRedux({
            studentId: id,
            data: mappingData,
          })
        );
        successModal({
          onOk: () => {
            router.push('/student');
          },
        });
      })
      .catch((error) => {
        errorModal({
          onOk: () => {
            router.push('/student');
          },
        });
      });
  };

  const renderAction = useCallback(
    (form: any) => {
      return (
        <FormFooter>
          <NegativeButton
            onClick={() => {
              router.push('/student');
            }}
          >
            Cancel
          </NegativeButton>
          <PositiveButton onClick={() => handleSubmit(form.values)}>
            Save
          </PositiveButton>
        </FormFooter>
      );
    },
    [id]
  );
  return (
    <>
      <StudentForm data={data} isEdit={true} renderAction={renderAction} />
    </>
  );
};
EditPage.getInitialProps = async (ctx: any) => {
  const studentId = ctx.query.id;
  const res = await studentApi.getStudentById(studentId);
  return { data: res.data, id: studentId };
};

const FormFooter = styled(Flex)`
  background: ${defaultTheme.colors.white};
  border-end-end-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 40px;
`;

export default EditPage;
