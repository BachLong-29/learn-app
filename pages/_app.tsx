import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Box } from '../components/General/Box';
import Head from 'next/head';
import MenuBar from '../components/Navigation/MenuBar';
import { wrapper } from '../redux/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>
      <MenuBar />
      <Box style={{ width: '100%', paddingTop: '87px' }}>
        <Component {...pageProps} />
      </Box>
    </>
  );
};
export default wrapper.withRedux(App);
