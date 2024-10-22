import React, { useEffect } from 'react';

import { Box } from 'ui-components/General/Box';
import { Flex } from 'ui-components/General/Flex';
import VerticalBar from 'ui-components/Navigation/VerticalBar';

interface Props {
  Comp: any;
}
const withPage = (Comp) => {
  const Page = (props: any) => {
    return (
      <Flex justifyContent="center">
        <Flex w="100%" maxWidth="2440px">
          <VerticalBar />
          <Box w="100%">
            <Comp {...props} />
          </Box>
        </Flex>
      </Flex>
    );
  };
  Page.getInitialProps = async (ctx: any) => {
    const [props] = await Promise.all([Comp.getInitialProps(ctx)]);
    return { ...props };
  };
  return Page;
};

export default withPage;
