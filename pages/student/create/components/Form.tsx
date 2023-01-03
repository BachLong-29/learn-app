import { Button, Form, Input, Radio } from 'antd';
import {
  addStudentRedux,
  editStudentRedux,
} from '../../../../redux/actions/student.action';

import { Student } from '../../../../utils/constants';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  id?: string;
  data?: Student;
  isEdit?: boolean;
}

const FormStudent = (props: Props) => {
  const { id = '', data, isEdit = false } = props;
  console.log({ data });
  const router = useRouter();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: Student) => {
    if (isEdit) {
      dispatch(
        editStudentRedux({
          key: id,
          name: values.name,
          age: values.age,
          gender: values.gender,
        })
      );
    } else {
      dispatch(
        addStudentRedux({
          key: uuidv4(),
          name: values.name,
          age: values.age,
          gender: values.gender,
        })
      );
    }
    onReset();
    router.push('/student');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const SForm = useMemo(() => {
    return (
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
        initialValues={{
          name: data?.name,
          age: data?.age,
          gender: data?.gender,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="Gender: ">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="others">Others</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 3, span: 21 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }, [JSON.stringify(data)]);

  return <div>{SForm}</div>;
};

export default FormStudent;
