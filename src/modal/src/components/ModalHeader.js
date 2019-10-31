/*
 * @flow
 */

import React, { Component, createElement } from 'react';
import type { ComponentType, Element } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NEUTRALS } from '../../../colors';
import { HeaderSection } from './styled/StyledModalComponents';

const ModalTitle = styled.h1`
  color: ${NEUTRALS[0]};
  font-size: 18px;
  font-weight: normal;
  margin: 0 30px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CloseButton = styled.button`
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
  onClickClose ?:() => void;
  textTitle ?:string;
  withHeader ?:ComponentType<ModalHeaderProps> | Element<any> | boolean;
};

export default class ModalHeader extends Component<ModalHeaderProps> {

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
      <CloseButton onClick={onClickClose}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </CloseButton>
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

    if (!withHeader) {
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

    if (React.isValidElement(withHeader)) {
      // $FlowFixMe - how do we refine Element?
      return withHeader;
    }

    if (withHeader) {
      // $FlowFixMe - how do we refine ComponentType?
      return createElement(withHeader, {
        onClickClose,
        textTitle,
      });
    }

    return null;
  }
}

// for testing
export {
  CloseButton,
};

export type {
  ModalHeaderProps,
};
