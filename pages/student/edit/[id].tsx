import { FormFooter, Title, WrappedTitle } from 'utils/styles/general';

import NegativeButton from 'ui-components/Button/NegativeButton';
import PositiveButton from 'ui-components/Button/PositiveButton';
import StudentForm from '../components/StudentForm';
import { StudentKeyValue } from 'utils/StudentKeyValues';
import SuccessModal from 'ui-components/Modal/SuccessModal';
import { editStudentRedux } from 'redux/actions/student.action';
import errorModal from 'ui-components/Modal/ErrorModal';
import studentApi from '../../api/studentService';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import withPage from 'components/withPage';

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
      [StudentKeyValue.NAME]: data.name,
      [StudentKeyValue.YEAR]: data.year,
      [StudentKeyValue.GENDER]: data.gender,
      [StudentKeyValue.NICK_NAME]: data.nickname,
      [StudentKeyValue.RANK]: data.rank,
      [StudentKeyValue.IMAGES]: data.images,
      [StudentKeyValue.DOB]: data.dob,
      [StudentKeyValue.MAJOR]: data.major,
      [StudentKeyValue.EMAIL]: data.email,
      [StudentKeyValue.PHONE]: data.phone,
      [StudentKeyValue.ADDRESS]: data.address,
      [StudentKeyValue.DESC]: data.desc,
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
        SuccessModal({
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
          <PositiveButton onClick={() => handleSubmit(form?.values)}>
            Save
          </PositiveButton>
        </FormFooter>
      );
    },
    [id]
  );
  return (
    <>
      <StudentForm
        data={data}
        isEdit={true}
        renderAction={renderAction}
        renderHeader={
          <WrappedTitle>
            <Title>Edit student</Title>
          </WrappedTitle>
        }
      />
    </>
  );
};
EditPage.getInitialProps = async (ctx: any) => {
  const studentId = ctx.query.id;
  const res = await studentApi.getStudentById(studentId);
  return { data: res.data, id: studentId };
};

export default withPage(EditPage);
