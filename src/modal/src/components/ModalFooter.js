/*
 * @flow
 */

import React, { Component, createElement } from 'react';
import type { ComponentType, Element } from 'react';

import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

import { Button } from '../../../button';
import { FooterSection } from './styled/StyledModalComponents';

// TODO: ":any" is a temporary fix
const PrimaryButton :any = styled(Button).attrs(() => ({ mode: 'primary' }))`
  margin: ${({ isLonely }) => (isLonely ? 0 : '0 0 0 20px')};
  flex: ${({ stretch }) => (stretch ? 1 : 'none')};
`;

// TODO: ":any" is a temporary fix
const SecondaryButton :any = styled(Button).attrs(() => ({ mode: 'default' }))`
  flex: ${({ stretch }) => (stretch ? 1 : 'none')};
`;

type ModalFooterProps = {
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

  isLonely = () :boolean => {

    const { textPrimary, textSecondary } = this.props;
    return (isEmpty(textPrimary) && !isEmpty(textSecondary))
      || (!isEmpty(textPrimary) && isEmpty(textSecondary));
  }

  renderPrimaryButton = () => {

    const {
      isDisabledPrimary,
      isPendingPrimary,
      onClickPrimary,
      shouldStretchButtons,
      textPrimary,
    } = this.props;

    if (!textPrimary) {
      return null;
    }

    return (
      <PrimaryButton
          disabled={isDisabledPrimary || isPendingPrimary}
          isLoading={isPendingPrimary}
          isLonely={this.isLonely()}
          onClick={onClickPrimary}
          stretch={shouldStretchButtons}>
        { textPrimary }
      </PrimaryButton>
    );
  }

  renderSecondaryButton = () => {

    const {
      isDisabledSecondary,
      isPendingSecondary,
      onClickSecondary,
      shouldStretchButtons,
      textSecondary,
    } = this.props;

    if (!textSecondary) {
      return null;
    }

    return (
      <SecondaryButton
          disabled={isDisabledSecondary || isPendingSecondary}
          isLoading={isPendingSecondary}
          onClick={onClickSecondary}
          stretch={shouldStretchButtons}>
        { textSecondary }
      </SecondaryButton>
    );
  }

  render() {

    const {
      isDisabledPrimary,
      isDisabledSecondary,
      isPendingPrimary,
      isPendingSecondary,
      onClickPrimary,
      onClickSecondary,
      textPrimary,
      textSecondary,
      withFooter,
    } = this.props;

    if (!withFooter || (!textPrimary && !textSecondary)) {
      return null;
    }

    if (withFooter === true) {
      return (
        <FooterSection>
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
