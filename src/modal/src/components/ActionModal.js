/*
 * @flow
 */

import React from 'react';
import type { Element } from 'react';

import isFunction from 'lodash/isFunction';
import { RequestStates } from 'redux-reqseq';
import type { RequestState } from 'redux-reqseq';

import Modal from './Modal';
import ModalFooter from './ModalFooter';
import type { ModalProps } from './Modal';

const DEFAULT_PRIMARY_TEXT :'Confirm' = 'Confirm';
const DEFAULT_SECONDARY_TEXT :'Cancel' = 'Cancel';

type ActionModalProps = {
  ...ModalProps;
  requestState :RequestState;
  requestStateComponents :{
    STANDBY ?:Element<*>;
    PENDING ?:Element<*>;
    SUCCESS ?:Element<*>;
    FAILURE ?:Element<*>;
  };
  shouldCloseOnSuccess :boolean;
};

const ActionModal = (props :ActionModalProps) => {

  const {
    children,
    isVisible,
    onClose,
    requestState,
    requestStateComponents,
    shouldCloseOnSuccess,
    shouldStretchButtons,
    textPrimary,
    textSecondary,
  } = props;

  if (!isVisible) {
    return null;
  }

  let isVisibleModal = isVisible;
  let withFooter = true;

  let body = requestStateComponents[RequestStates.STANDBY] || (
    <span>Are you sure?</span>
  );

  if (requestState === RequestStates.FAILURE) {
    body = requestStateComponents[RequestStates.FAILURE] || (
      <span>Failure. Please try again.</span>
    );
  }
  else if (requestState === RequestStates.SUCCESS) {
    body = requestStateComponents[RequestStates.SUCCESS] || (
      <span>Success!</span>
    );
  }

  if (requestState === RequestStates.PENDING) {
    withFooter = (
      <ModalFooter
          isPendingPrimary
          isDisabledSecondary
          shouldStretchButtons={shouldStretchButtons}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          withFooter />
    );
  }
  else if (requestState === RequestStates.FAILURE || requestState === RequestStates.SUCCESS) {
    withFooter = (
      <ModalFooter
          onClickPrimary={onClose}
          shouldStretchButtons={shouldStretchButtons}
          textPrimary="Close"
          textSecondary="" />
    );
  }

  if (requestState === RequestStates.SUCCESS && shouldCloseOnSuccess === true) {
    isVisibleModal = false;
    if (isFunction(onClose)) {
      onClose();
    }
  }

  if (!isVisibleModal) {
    return null;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Modal {...props} isVisible={isVisibleModal} withFooter={withFooter}>
      { body }
      { children }
    </Modal>
  );
  /* eslint-enable */
};

/* eslint-disable react/default-props-match-prop-types */
ActionModal.defaultProps = {
  children: null,
  requestState: RequestStates.STANDBY,
  requestStateComponents: {},
  shouldCloseOnSuccess: false,
  textPrimary: DEFAULT_PRIMARY_TEXT,
  textSecondary: DEFAULT_SECONDARY_TEXT,
};
/* eslint-enable */

export default ActionModal;
