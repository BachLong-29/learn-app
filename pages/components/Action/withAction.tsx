// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { buildActionBtns } from './actions';

// export type WithActionsByStatusProps = {
//   data: any;
//   dropdownComponent?: () => React.ReactNode;
//   isFormDetail?: boolean;
//   orgId?: string;
//   layout?: 'list' | 'detail';
//   orgConfig?: any;
// };

// const withActionsByStatus = (
//   Component: React.FC<{
//     actionBtns: any;
//     actions: any;
//     data: any;
//     isFormDetail: boolean;
//     dropdownComponent?: () => React.ReactNode;
//     orgId?: string;
//     layout?: 'list' | 'detail';
//     orgConfig?: any;
//   }>
// ): React.FC<WithActionsByStatusProps> => {
//   const Actions = ({
//     data,
//     dropdownComponent,
//     isFormDetail = false,
//     orgId,
//     layout = 'list',
//     orgConfig,
//   }: WithActionsByStatusProps) => {
//     const [actions, setActions] = useState<$FixType>({});
//     const [actionBtns, setActionBtns] = useState<$FixType>([]);
//     const { exec: exceDeactive } = useDeactiveVendor();
//     const { exec: exceActive } = useActiveVendor();
//     const { exec: exceDelete } = useDeleteVendor();
//     const { exec: exceWithdraw } = useWithdrawVendor();
//     const { exec: execMerge } = useMergeVendor();
//     // const { request: requestDetail, fetch: fetchDetail } = useGetVendorById();
//     // const { request, fetch } = useGetVendors();
//     const router = useRouter();
//     useEffect(() => {
//       setActions(buildActionBtns({}));
//     }, [vendor]);
//     useEffect(() => {
//       setActionBtns(
//         renderVendorsAction({
//           vendorActions: actions,
//           status: vendor?.status,
//           vendorStatus: vendor?.vendorStatus,
//           vendor,
//         })
//       );
//     }, [vendor, actions]);

//     if (isEmpty(actionBtns)) {
//       return <Box width="35px" />;
//     }
//     return (
//       <Component
//         actionBtns={actionBtns}
//         actions={actions}
//         vendor={vendor}
//         orgId={orgId}
//         isFormDetail={isFormDetail}
//         dropdownComponent={dropdownComponent}
//         orgConfig={orgConfig}
//         layout={layout}
//       />
//     );
//   };
//   return Actions;
// };

import React from 'react';

const withAction = () => {
  return <div>withAction</div>;
};

export default withAction;
