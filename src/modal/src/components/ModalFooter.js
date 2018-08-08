/*
 * @flow
 */

import React, { Component, createElement } from 'react';
import type { ComponentType } from 'react';

import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';

import Button from '../../../button';
import { FooterSection } from './styled/StyledModalComponents';

export const DEFAULT_TEXT_PRIMARY_ACTION :'Confirm' = 'Confirm';
export const DEFAULT_TEXT_SECONDARY_ACTION :'Cancel' = 'Cancel';

const PrimaryButton = styled(Button).attrs({
  type: 'primary'
})`
  margin: ${({ isLonely }) => (isLonely ? 0 : '0 0 0 20px')};
  flex: ${({ stretch }) => (stretch ? 1 : 'none')};
`;

const SecondaryButton = styled(Button).attrs({
  type: 'default'
})`
  flex: ${({ stretch }) => (stretch ? 1 : 'none')};
`;

type ModalFooterProps = {
  onClickPrimary ? :() => void;
  onClickSecondary ? :() => void;
  shouldStretchButtons ? :boolean;
  textPrimary ? :string;
  textSecondary ? :string;
};

type OverrideFooterProps = {
  withFooter ? :ComponentType<ModalFooterProps> | boolean;
};

type Props =
  & ModalFooterProps
  & OverrideFooterProps;

export default class ModalFooter extends Component<Props> {

  static propTypes = {
    onClickPrimary: PropTypes.func,
    onClickSecondary: PropTypes.func,
    shouldStretchButtons: PropTypes.bool,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    withFooter: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  }

  static defaultProps = {
    onClickPrimary: undefined,
    onClickSecondary: undefined,
    shouldStretchButtons: false,
    textPrimary: DEFAULT_TEXT_PRIMARY_ACTION,
    textSecondary: DEFAULT_TEXT_SECONDARY_ACTION,
    withFooter: true,
  }

  isLonely = () :boolean => {

    const { textPrimary, textSecondary } = this.props;
    return (isEmpty(textPrimary) && !isEmpty(textSecondary))
      || (!isEmpty(textPrimary) && isEmpty(textSecondary));
  }

  renderPrimaryButton = () => {

    const { onClickPrimary, shouldStretchButtons, textPrimary } = this.props;
    if (!textPrimary) {
      return null;
    }

    return (
      <PrimaryButton
          isLonely={this.isLonely()}
          onClick={onClickPrimary}
          stretch={shouldStretchButtons}>
        { textPrimary }
      </PrimaryButton>
    );
  }

  renderSecondaryButton = () => {

    const { onClickSecondary, shouldStretchButtons, textSecondary } = this.props;
    if (!textSecondary) {
      return null;
    }

    return (
      <SecondaryButton onClick={onClickSecondary} stretch={shouldStretchButtons}>
        { textSecondary }
      </SecondaryButton>
    );
  }

  render() {

    const {
      onClickPrimary,
      onClickSecondary,
      textPrimary,
      textSecondary,
      withFooter,
    } = this.props;

    if (withFooter === false || (!textPrimary && !textSecondary)) {
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

    if (withFooter) {
      return createElement(withFooter, {
        onClickPrimary,
        onClickSecondary,
        textPrimary,
        textSecondary,
      });
    }

    return null;
  }
}
