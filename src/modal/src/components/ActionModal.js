/*
 * @flow
 */

import React from 'react';
import type { Element } from 'react';

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
    STANDBY ?:Element<any>;
    PENDING ?:Element<any>;
    SUCCESS ?:Element<any>;
    FAILURE ?:Element<any>;
  };
};

const ActionModal = (props :ActionModalProps) => {

  const {
    children,
    isVisible,
    modalRef,
    onClickPrimary,
    onClickSecondary,
    onClose,
    requestState,
    requestStateComponents,
    shouldBeCentered,
    shouldCloseOnEscape,
    shouldCloseOnOutsideClick,
    shouldStretchButtons,
    textPrimary,
    textSecondary,
    textTitle,
    viewportScrolling,
    withHeader,
  } = props;

  if (!isVisible) {
    return null;
  }

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

  return (
    <Modal
        isVisible={isVisible}
        modalRef={modalRef}
        onClickPrimary={onClickPrimary}
        onClickSecondary={onClickSecondary}
        onClose={onClose}
        requestState={requestState}
        requestStateComponents={requestStateComponents}
        shouldBeCentered={shouldBeCentered}
        shouldCloseOnEscape={shouldCloseOnEscape}
        shouldCloseOnOutsideClick={shouldCloseOnOutsideClick}
        shouldStretchButtons={shouldStretchButtons}
        textPrimary={textPrimary}
        textSecondary={textSecondary}
        textTitle={textTitle}
        viewportScrolling={viewportScrolling}
        withFooter={withFooter}
        withHeader={withHeader}>
      { body }
      { children }
    </Modal>
  );
};

/* eslint-disable react/default-props-match-prop-types */
ActionModal.defaultProps = {
  children: null,
  requestState: RequestStates.STANDBY,
  requestStateComponents: {},
  textPrimary: DEFAULT_PRIMARY_TEXT,
  textSecondary: DEFAULT_SECONDARY_TEXT,
};
/* eslint-enable */

export default ActionModal;
