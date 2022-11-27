import Form from './components/Form';
import Head from 'next/head';

export default function User() {
  return (
    <div>
      <Head>
        <title>Create New Student</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>Create new student</div>
      <Form />
    </div>
  );
}
