import { ActionMenu, IMenuItem } from 'atalink-web-core';
import { ActionTypes, SendingType } from '../../../../utils/constants';
import React, { useCallback, useMemo, useState } from 'react';
import { get, isEmpty, map } from 'lodash';

import { ActionType } from '../../../../../ReturnOrderPage/core/models/Actions';
import { Box } from 'atalink-web-ui';
import ConfirmActionModal from './ConfirmActionModal';
import MergeSupplierModal from './MergeSupplierModal';
import SendEmailModal from '../../../CreatePage/components/SendEmailVendor/SendEmailModal';
import withActionsByStatus from './withActionsByStatus';

const mapActionByStatustoMenuItemData = (actions: ActionType[]): IMenuItem[] =>
  map(actions, (action) => {
    return { ...action, name: action.content, useTranslate: true };
  });

const ListMenu = withActionsByStatus(
  ({
    actionBtns,
    actions,
    dropdownComponent,
    vendor,
    orgId,
    orgConfig,
    layout,
  }) => {
    const [isModalVisibled, setModalVisibled] = useState(false);
    const [isSendEmail, setIsSendEmail] = useState(false);
    const [isMergeModal, setIsMergeModal] = useState(false);

    const [sendEmailVisible, setSendEmailVisible] = useState<any>({
      visible: false,
      type: SendingType.CREATE,
    });

    const [actionType, setActionType] = useState<$FixType>(null);
    const actionData = useMemo(() => {
      return get(actionType, 'extraData', null);
    }, [actionType]);

    const onClick = ({ key }) => {
      const { modalType, onOk } = actions[key];
      setActionType(actions[key]);
      if (modalType) {
        switch (modalType) {
          case ActionTypes.INVITE:
            setSendEmailVisible({ visible: true, type: SendingType.CREATE });
            return;
          case ActionTypes.WITHDRAW:
          case ActionTypes.ACTIVE:
          case ActionTypes.DEACTIVATE:
          case ActionTypes.DELETE:
            setModalVisibled(true);
            return;
          case ActionTypes.MERGE:
            setIsMergeModal(true);
          default:
            return null;
        }
      }
      onOk();
    };

    const handleCloseModal = () => {
      setModalVisibled(false);
    };

    const handleOkClick = useCallback(
      (req, isSend = false) => {
        setModalVisibled(false);
        if (!isSend) {
          actionType?.onOk(req);
        }
      },
      [actionType, isSendEmail]
    );

    const handleEmailRemoveVendor = (checked, data) => () => {
      if (checked) {
        setSendEmailVisible({ visible: true, type: SendingType.DELETE });
        setIsSendEmail(true);
        return;
      }
      handleOkClick(data);
    };

    const onCloseSendEmailModal = useCallback(
      (isSend = false) => {
        if (!isSend) {
          setIsSendEmail(false);
          handleOkClick(actionData, isSend);
        }
        setSendEmailVisible({ visible: false, type: undefined });
        setModalVisibled(false);
      },
      [isSendEmail]
    );

    return (
      <Box
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ConfirmActionModal
          isVisibled={isModalVisibled}
          typeModal={get(actionType, 'modalType', null)}
          onCancel={handleCloseModal}
          onOk={handleOkClick}
          data={actionData}
          handleEmailRemoveVendor={handleEmailRemoveVendor}
        />
        <SendEmailModal
          orgId={orgId}
          companyName={vendor?.name}
          companyEmail={vendor?.companyEmail || []}
          contactEmails={vendor?.contactEmails || []}
          onCloseModal={onCloseSendEmailModal}
          visible={sendEmailVisible.visible}
          handleSubmit={(req) => {
            actionType?.onOk({
              ...req,
              ...actionData,
              isSendEmail,
            });
          }}
          orgVenId={vendor.venId}
          orgConfig={orgConfig}
          emailType={sendEmailVisible.type}
        />
        {!isEmpty(vendor.mergeIds) && (
          <MergeSupplierModal
            orgId={orgId}
            visible={isMergeModal}
            onCancel={() => setIsMergeModal(false)}
            onOk={(req) => {
              actionType?.onOk(req);
            }}
            vendor={vendor}
            layout={layout}
          />
        )}
        <ActionMenu
          data={mapActionByStatustoMenuItemData(actionBtns)}
          useTranslate
          onItemSelect={onClick}
          dropdownComponent={dropdownComponent}
        />
      </Box>
    );
  }
);
