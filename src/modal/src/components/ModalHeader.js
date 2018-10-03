/*
 * @flow
 */

import React, { Component, createElement } from 'react';
import type { ComponentType } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderSection } from './styled/StyledModalComponents';

const ModalTitle = styled.h1`
  color: #555e6f;
  font-size: 18px;
  font-weight: normal;
  line-height: normal;
  margin: 0 30px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CloseButtonWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  height: 32px;
  margin: 0 0 0 auto;
  padding: 0;
  text-align: center;
  width: 32px;
`;

type ModalHeaderProps = {
  onClickClose ? :() => void;
  textTitle ? :string;
};

type OverrideHeaderProps = {
  withHeader ? :ComponentType<ModalHeaderProps> | boolean;
};

type Props =
  & ModalHeaderProps
  & OverrideHeaderProps;

export default class ModalHeader extends Component<Props> {

  static propTypes = {
    onClickClose: PropTypes.func,
    textTitle: PropTypes.string,
    withHeader: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
  }

  static defaultProps = {
    onClickClose: undefined,
    textTitle: '',
    withHeader: true,
  }

  renderCloseButton = () => {

    const { onClickClose } = this.props;

    return (
      <CloseButtonWrapper onClick={onClickClose}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </CloseButtonWrapper>
    );
  }

  renderTitle = () => {

    const { textTitle } = this.props;

    if (!textTitle) {
      return null;
    }

    return (
      <ModalTitle>
        { textTitle }
      </ModalTitle>
    );
  }

  render() {

    const {
      onClickClose,
      textTitle,
      withHeader,
    } = this.props;

    if (withHeader === false) {
      return null;
    }

    if (withHeader === true) {
      return (
        <HeaderSection>
          { this.renderTitle() }
          { this.renderCloseButton() }
        </HeaderSection>
      );
    }

    if (withHeader) {
      return createElement(withHeader, {
        onClickClose,
        textTitle,
      });
    }

    return null;
  }
}
