import React, { useEffect } from 'react';

interface Props {
  Comp: any;
}
const withPage = (Comp) => {
  const Page = (props: any) => {
    // if (document) {
    //   const body = document.body;
    //   body.style.backgroundImage = 'none';
    // }

    return <Comp {...props} />;
  };
  Page.getInitialProps = async (ctx: any) => {
    const [props] = await Promise.all([Comp.getInitialProps(ctx)]);
    return { ...props };
  };
  return Page;
};

export default withPage;
