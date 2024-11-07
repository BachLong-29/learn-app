import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Box } from 'ui-components/General/Box';
import Head from 'next/head';
import MenuBar from 'ui-components/Navigation/MenuBar';
import { wrapper } from '../redux/store/store';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Application for student management" />
        <link rel="icon" href="/images/logo-app.png" />
        <link rel="stylesheet" href="/styles/globals.css" />
      </Head>

      <Box minHeight="100vh">
        <MenuBar />
        <Box
          position="relative"
          paddingTop="95px"
          w="100%"
          h="calc(100vh - 95px)"
        >
          <Component {...pageProps} />
        </Box>
      </Box>
      {/* <Footer /> */}
    </>
  );
};
export default wrapper.withRedux(App);
