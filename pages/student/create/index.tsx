import { Box } from 'ui-components/General/Box';
import Form from './components/Form';
import Head from 'next/head';

export default function User() {
  return (
    <div>
      <Head>
        <title>Create New Student</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Box p="0 70px">
        <Form />
      </Box>
    </div>
  );
}
