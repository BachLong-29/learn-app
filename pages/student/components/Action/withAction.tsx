import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { buildAction, buildActionItems } from './action';

import { $FixType } from 'utils/constants';
import { useDeleteStudent } from 'pages/student/core/usecase/deleteStudent';

interface Props {
  Comp: any;
}
const withAction = (
  Comp: React.FC<{
    actionBtns: any;
    actions: any;
    data: any;
    studentId: string;
  }>
) => {
  const Action = ({ studentId, data }: { studentId: any; data: any }) => {
    const [actions, setActions] = useState<$FixType>({});
    const [actionBtns, setActionBtns] = useState<$FixType>([]);
    const { exec: execDeleteStudent } = useDeleteStudent();
    const router = useRouter();

    useEffect(() => {
      setActions(
        buildAction({
          router,
          studentId,
          execDeleteStudent,
        })
      );
    }, [studentId]);

    useEffect(() => {
      setActionBtns(
        buildActionItems({
          studentActions: actions,
        })
      );
    }, [actions]);

    return (
      <Comp
        actionBtns={actionBtns}
        actions={actions}
        studentId={studentId}
        data={data}
      />
    );
  };
  return Action;
};

export default withAction;
