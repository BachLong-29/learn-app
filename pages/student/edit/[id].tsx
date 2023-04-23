import { useEffect, useState } from 'react';

import Form from '../components/Form';
import Head from 'next/head';
import studentApi from '../../api/studentService';

type EditProps = {
  data: any;
  id: string;
};
const EditPage = (props: EditProps) => {
  const { data, id } = props;
  return (
    <div>
      <Head>
        <title>Edit Student</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* <div>Edit student - {id}</div> */}
      <Form data={data} isEdit={true} />
    </div>
  );
};
EditPage.getInitialProps = async (ctx: any) => {
  const studentId = ctx.query.id;
  const res = await studentApi.getStudentById(studentId);
  return { data: res.data, id: studentId };
};
export default EditPage;
