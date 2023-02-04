import {
  $FixType,
  Student,
  genderOptions,
  rankOptions,
} from '../../../../utils/constants';
import { Button, Input, Radio } from 'antd';
import { FastField, Form, Formik } from 'formik';
import {
  addStudentRedux,
  editStudentRedux,
} from '../../../../redux/actions/student.action';
import { memo, useMemo } from 'react';

import CreatePage from './CreatePage';
import InputField from '../../../components/Field/InputField';
import SelectField from 'components/Field/SelectField';
import { noop } from 'lodash';
import studentApi from './../../../api/studentService';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  id?: string;
  data?: $FixType;
  isEdit?: boolean;
}

const FormStudent = (props: Props) => {
  const { data, isEdit = false } = props;
  const router = useRouter();
  // const dispatch = useDispatch();
  // // const [form] = Form.useForm();
  // // const onReset = () => {
  // //   form.resetFields();
  // // };

  // const onFinish = (values: Student) => {
  //   if (isEdit) {
  //     studentApi.updateStudent(data?.id, {
  //       id: data?.id || '',
  //       name: values.name,
  //       age: values.age,
  //       gender: values.gender,
  //     });
  //     dispatch(
  //       editStudentRedux({
  //         id: data?.id || '',
  //         name: values.name,
  //         age: values.age,
  //         gender: values.gender,
  //       })
  //     );
  //   } else {
  //     const id = uuidv4();
  //     studentApi.createStudent({
  //       id: id,
  //       name: values.name,
  //       age: values.age,
  //       gender: values.gender,
  //     });
  //     dispatch(
  //       addStudentRedux({
  //         id: id,
  //         name: values.name,
  //         age: values.age,
  //         gender: values.gender,
  //       })
  //     );
  //   }
  //   // onReset();
  //   router.push('/student');
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log('Failed:', errorInfo);
  // };
  // const initValue = useMemo(() => {
  //   return {
  //     name: data?.name,
  //     age: data?.age,
  //     gender: data?.gender,
  //   };
  // }, [data, JSON.stringify(data)]);
  // const initialValues = {
  //   fullname: data?.name,
  //   age: data?.age,
  //   gender: data?.gender,
  // };
  // const SForm = useMemo(() => {
  //   return (
  //     <>
  //       <Formik initialValues={initialValues} onSubmit={noop}>
  //         {(formikProps) => {
  //           const { values, errors, touched } = formikProps;
  //           return (
  //             <Form>
  //               <FastField
  //                 name="fullname"
  //                 component={InputField}
  //                 label="Name"
  //                 placeholder="Enter your name"
  //                 validate
  //               />
  //             </Form>
  //           );
  //         }}
  //       </Formik>
  //     </>
  //     // <Form
  //     //   form={form}
  //     //   name="basic"
  //     //   labelCol={{ span: 3 }}
  //     //   wrapperCol={{ span: 21 }}
  //     //   initialValues={initValue}
  //     //   onFinish={onFinish}
  //     //   onFinishFailed={onFinishFailed}
  //     // >
  //     //   <Form.Item
  //     //     label="Name"
  //     //     name="name"
  //     //     rules={[{ required: true, message: 'Please input your username!' }]}
  //     //   >
  //     //     <Input />
  //     //   </Form.Item>

  //     //   <Form.Item
  //     //     label="Age"
  //     //     name="age"
  //     //     rules={[{ required: true, message: 'Please input your age!' }]}
  //     //   >
  //     //     <Input />
  //     //   </Form.Item>

  //     //   <Form.Item name="gender" label="Gender: ">
  //     //     <Radio.Group>
  //     //       <Radio value="male">Male</Radio>
  //     //       <Radio value="female">Female</Radio>
  //     //       <Radio value="others">Others</Radio>
  //     //     </Radio.Group>
  //     //   </Form.Item>

  //     //   <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
  //     //     <Button type="primary" htmlType="submit">
  //     //       Submit
  //     //     </Button>
  //     //   </Form.Item>
  //     // </Form>
  //   );
  // }, [data?.id, data, initValue]);
  const initialValues = {
    name: data?.name,
    age: data?.age,
    gender: data?.gender,
    nickname: data?.nickname,
    rank: data?.rank,
  };
  const handleSubmit = (data: $FixType) => {
    const id = uuidv4();
    console.log({ data });
    studentApi.createStudent({
      id: id,
      name: data.name,
      age: data.age,
      gender: data.gender,
      nickname: data.nickname,
      rank: data.rank,
    });
  };
  return (
    <div>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={(data) => handleSubmitt(data)}
        component={CreatePage}
      /> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => handleSubmit(data)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          return (
            <Form>
              <Grid>
                <button type="submit">Submit</button>
                <FastField
                  name="name"
                  component={InputField}
                  label="Name"
                  placeholder="Enter your name"
                  validate
                />
                <FastField
                  name="age"
                  component={InputField}
                  label="Age"
                  type="number"
                  placeholder="Enter your age"
                />
                <FastField
                  name="gender"
                  component={SelectField}
                  label="Gender"
                  options={genderOptions}
                  placeholder="Select gender"
                />
                <FastField
                  name="nickname"
                  component={InputField}
                  label="Nickname"
                  placeholder="Enter your nickname"
                />
                <FastField
                  name="rank"
                  component={SelectField}
                  label="Rank"
                  options={rankOptions}
                  placeholder="Select rank"
                />
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
