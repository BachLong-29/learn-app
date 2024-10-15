import { Button, Modal } from 'antd';
import { useCallback, useMemo } from 'react';

import { Flex } from 'ui-components/General/Flex';
import NegativeButton from 'ui-components/Button/NegativeButton';
import PositiveButton from 'ui-components/Button/PositiveButton';
import RightOutlined from '@ant-design/icons/RightOutlined';
import SVGIcon from 'components/SVGIcon';
import StudentForm from '../components/StudentForm';
import defaultTheme from 'ui-components/theme/theme';
import { editStudentRedux } from 'redux/actions/student.action';
import studentApi from '../../api/studentService';
import styled from 'styled-components';
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
        Modal.success({
          style: { padding: 0 },
          className: 'successModal',
          title: (
            <>
              <SVGIcon
                src="/images/svg/success-icon.svg"
                size={60}
                s={{
                  position: 'absolute',
                  top: '-32px',
                  left: 'calc(50% - 30px)',
                }}
              />
            </>
          ),
          maskStyle: { padding: 0 },
          content: (
            <Flex
              justifyContent="center"
              alignItems="center"
              h={200}
              w={270}
              fontSize="32px"
              color={defaultTheme.colors.dark_blue}
            >
              Success!
            </Flex>
          ),
          width: 270,
          centered: true,
          maskClosable: true,
          footer: (
            <Flex
              background="#8ddaaa"
              h={100}
              style={{
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                style={{
                  padding: '10px',
                  width: '150px',
                  height: '50px',
                  borderRadius: '40px',
                }}
                onClick={() => {
                  router.push('/student');
                }}
              >
                Go List
                <RightOutlined style={{ fontSize: '12px' }} />
              </Button>
            </Flex>
          ),
          icon: null,
        });
      })
      .catch((error) => {
        console.log({ error });
        Modal.error({
          title: 'Error',
          content: 'error',
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
