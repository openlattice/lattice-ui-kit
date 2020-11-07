/*
 * @flow
 */

import React, { Component, createElement } from 'react';
import type { ComponentType, Element } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FooterSection } from './styled/StyledModalComponents';

import { Button } from '../../../button';

// named buttons for tests
const PrimaryButton = styled(Button)``;
const SecondaryButton = styled(Button)``;

type ModalFooterProps = {
  className ?:string;
  isDisabledPrimary ?:boolean;
  isDisabledSecondary ?:boolean;
  isPendingPrimary ?:boolean;
  isPendingSecondary ?:boolean;
  onClickPrimary ?:() => void;
  onClickSecondary ?:() => void;
  shouldStretchButtons ?:boolean;
  textPrimary ?:string;
  textSecondary ?:string;
  withFooter ?:ComponentType<any> | Element<any> | boolean;
};

export default class ModalFooter extends Component<ModalFooterProps> {

  static propTypes = {
    className: PropTypes.string,
    isDisabledPrimary: PropTypes.bool,
    isDisabledSecondary: PropTypes.bool,
    isPendingPrimary: PropTypes.bool,
    isPendingSecondary: PropTypes.bool,
    onClickPrimary: PropTypes.func,
    onClickSecondary: PropTypes.func,
    shouldStretchButtons: PropTypes.bool,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    withFooter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
  }

  static defaultProps = {
    className: undefined,
    isDisabledPrimary: false,
    isDisabledSecondary: false,
    isPendingPrimary: false,
    isPendingSecondary: false,
    onClickPrimary: undefined,
    onClickSecondary: undefined,
    shouldStretchButtons: false,
    textPrimary: undefined,
    textSecondary: undefined,
    withFooter: true,
  }

  renderPrimaryButton = () => {

    const {
      isDisabledPrimary,
      isPendingPrimary,
      onClickPrimary,
      textPrimary,
    } = this.props;

    if (!textPrimary) {
      return null;
    }

    return (
      <PrimaryButton
          color="primary"
          disabled={isDisabledPrimary || isPendingPrimary}
          isLoading={isPendingPrimary}
          onClick={onClickPrimary}>
        { textPrimary }
      </PrimaryButton>
    );
  }

  renderSecondaryButton = () => {

    const {
      isDisabledSecondary,
      isPendingSecondary,
      onClickSecondary,
      textSecondary,
    } = this.props;

    if (!textSecondary) {
      return null;
    }

    return (
      <SecondaryButton
          name="secondary"
          id="secondary"
          disabled={isDisabledSecondary || isPendingSecondary}
          isLoading={isPendingSecondary}
          onClick={onClickSecondary}>
        { textSecondary }
      </SecondaryButton>
    );
  }

  render() {

    const {
      className,
      isDisabledPrimary,
      isDisabledSecondary,
      isPendingPrimary,
      isPendingSecondary,
      onClickPrimary,
      onClickSecondary,
      shouldStretchButtons,
      textPrimary,
      textSecondary,
      withFooter,
    } = this.props;

    if (!textPrimary && !textSecondary) {
      return null;
    }

    if (withFooter === true) {
      return (
        <FooterSection className={className} stretch={shouldStretchButtons}>
          { this.renderPrimaryButton() }
          { this.renderSecondaryButton() }
        </FooterSection>
      );
    }

    if (React.isValidElement(withFooter)) {
      // $FlowFixMe - how do we refine Element?
      return withFooter;
    }

    if (withFooter) {
      // $FlowFixMe - how do we refine ComponentType?
      return createElement(withFooter, {
        className,
        isDisabledPrimary,
        isDisabledSecondary,
        isPendingPrimary,
        isPendingSecondary,
        onClickPrimary,
        onClickSecondary,
        textPrimary,
        textSecondary,
      });
    }

    return null;
  }
}

// for testing
export {
  PrimaryButton,
  SecondaryButton,
};

export type {
  ModalFooterProps,
};
