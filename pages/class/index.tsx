import Head from 'next/head';
import Todo from 'ui-components/TodoPage/Todo';

export default function Class() {
  return (
    <div>
      <Head>
        <title>Class Board</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Todo />
    </div>
  );
}
