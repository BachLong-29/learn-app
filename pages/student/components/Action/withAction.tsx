import { NextRouter } from 'next/router';
import React from 'react';

interface Props {
  Comp: any;
}
const withAction = (Comp: any) => {
  const Action = ({
    id,
    data,
    router,
  }: {
    id: any;
    data: any;
    router: NextRouter;
  }) => {
    return <Comp id={id} data={data} router={router} />;
  };
  return Action;
};

export default withAction;
