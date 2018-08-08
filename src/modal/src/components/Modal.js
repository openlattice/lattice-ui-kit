/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';

import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import Overlay from '../../../overlay';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { ModalOuterContainer, ModalInnerContainer } from './styled/StyledModalComponents';

const ESC_KEY_CODE :'Escape' = 'Escape';

type Props = {
  children :Node;
  isVisible :boolean;
  onClickPrimary ? :() => void;
  onClickSecondary ? :() => void;
  onClose :() => void;
  shouldBeCentered ? :boolean;
  shouldCloseOnEscape ? :boolean;
  shouldStretchButtons ? :boolean;
  textPrimary ? :string;
  textSecondary ? :string;
  textTitle ? :string;
  withFooter ? :ComponentType<*> | boolean;
  withHeader ? :ComponentType<*> | boolean;
};

export default class Modal extends Component<Props> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onClickPrimary: PropTypes.func,
    onClickSecondary: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    shouldBeCentered: PropTypes.bool,
    shouldCloseOnEscape: PropTypes.bool,
    shouldStretchButtons: PropTypes.bool,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    textTitle: PropTypes.string,
    withFooter: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
    withHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  }

  static defaultProps = {
    onClickPrimary: undefined,
    onClickSecondary: undefined,
    shouldBeCentered: true,
    shouldCloseOnEscape: true,
    shouldStretchButtons: false,
    textPrimary: '',
    textSecondary: '',
    textTitle: '',
    withFooter: true,
    withHeader: true,
  }

  escapeKeyIsPressed :boolean = false;

  componentDidMount() {

    document.addEventListener('keydown', this.handleOnKeyDown, false);
    document.addEventListener('keyup', this.handleOnKeyUp, false);
  }

  componentWillUnmount() {

    document.removeEventListener('keydown', this.handleOnKeyDown, false);
    document.removeEventListener('keyup', this.handleOnKeyUp, false);
  }

  close = () => {

    const { onClose } = this.props;
    if (onClose && isFunction(onClose)) {
      onClose();
    }
  }

  handleOnClickOverlay = (event :SyntheticEvent<HTMLElement>) => {

    console.log('overlay click')
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  handleOnClickPrimary = () => {

    const { onClickPrimary } = this.props;
    if (onClickPrimary && isFunction(onClickPrimary)) {
      onClickPrimary();
    }
  }

  handleOnClickSecondary = () => {

    const { onClickSecondary } = this.props;
    if (onClickSecondary && isFunction(onClickSecondary)) {
      onClickSecondary();
    }
    else {
      this.close();
    }
  }

  handleOnKeyDown = (event :KeyboardEvent) => {

    const { shouldCloseOnEscape } = this.props;

    if (this.escapeKeyIsPressed) {
      return;
    }

    if (event.key === ESC_KEY_CODE) {
      this.escapeKeyIsPressed = true;
    }

    switch (event.key) {
      case ESC_KEY_CODE: {
        if (shouldCloseOnEscape === true) {
          this.close();
        }
        break;
      }
      default:
        break;
    }
  }

  handleOnKeyUp = (event :KeyboardEvent) => {

    if (event.key === ESC_KEY_CODE) {
      this.escapeKeyIsPressed = false;
    }
  }

  render() {

    const {
      children,
      isVisible,
      shouldBeCentered,
      shouldStretchButtons,
      textPrimary,
      textSecondary,
      textTitle,
      withFooter,
      withHeader,
    } = this.props;

    return (
      <Overlay isVisible={isVisible}>
        <ModalOuterContainer center={shouldBeCentered} onClick={this.handleOnClickOverlay}>
          <ModalInnerContainer>
            <ModalHeader
                onClickClose={this.close}
                textTitle={textTitle}
                withHeader={withHeader} />
            <ModalBody>
              { children }
            </ModalBody>
            <ModalFooter
                onClickPrimary={this.handleOnClickPrimary}
                onClickSecondary={this.handleOnClickSecondary}
                shouldStretchButtons={shouldStretchButtons}
                textPrimary={textPrimary}
                textSecondary={textSecondary}
                withFooter={withFooter} />
          </ModalInnerContainer>
        </ModalOuterContainer>
      </Overlay>
    );
  }
}
