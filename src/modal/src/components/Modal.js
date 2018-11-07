/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';

import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import Overlay from '../../../overlay';
import KeyCodes from '../../../utils/constants/KeyCodes';
import { ModalOuterContainer, ModalInnerContainer } from './styled/StyledModalComponents';

type Props = {
  children :Node;
  isVisible :boolean;
  onClickPrimary ? :() => void;
  onClickSecondary ? :() => void;
  onClose :() => void;
  shouldBeCentered ? :boolean;
  shouldCloseOnEscape ? :boolean;
  shouldCloseOnOutsideClick ? :boolean;
  shouldStretchButtons ? :boolean;
  textPrimary ? :string;
  textSecondary ? :string;
  textTitle ? :string;
  withFooter ? :ComponentType<*> | boolean;
  withHeader ? :ComponentType<*> | boolean;
};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/modal-dialog
 * https://evergreen.surge.sh/components/dialog
 */
export default class Modal extends Component<Props> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onClickPrimary: PropTypes.func,
    onClickSecondary: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    shouldBeCentered: PropTypes.bool,
    shouldCloseOnEscape: PropTypes.bool,
    shouldCloseOnOutsideClick: PropTypes.bool,
    shouldStretchButtons: PropTypes.bool,
    textPrimary: PropTypes.string,
    textSecondary: PropTypes.string,
    textTitle: PropTypes.string,
    withFooter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
    withHeader: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
  }

  static defaultProps = {
    onClickPrimary: undefined,
    onClickSecondary: undefined,
    shouldBeCentered: true,
    shouldCloseOnEscape: true,
    shouldCloseOnOutsideClick: true,
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

  handleOnClickOutside = (event :SyntheticEvent<HTMLElement>) => {

    const { shouldCloseOnOutsideClick } = this.props;
    if (event.target === event.currentTarget && shouldCloseOnOutsideClick) {
      this.close();
    }
  }

  handleOnClickOverlay = () => {

    const { shouldCloseOnOutsideClick } = this.props;
    if (shouldCloseOnOutsideClick) {
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

    if (event.key === KeyCodes.ESCAPE) {
      this.escapeKeyIsPressed = true;
    }

    switch (event.key) {
      case KeyCodes.ESCAPE: {
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

    if (event.key === KeyCodes.ESCAPE) {
      this.escapeKeyIsPressed = false;
    }
  }

  renderHeaderComponent = () => {

    const {
      textTitle,
      withHeader,
    } = this.props;

    if (withHeader === false) {
      return null;
    }

    return (
      <ModalHeader
          onClickClose={this.close}
          textTitle={textTitle}
          withHeader={withHeader} />
    );
  }

  renderFooterComponent = () => {

    const {
      shouldStretchButtons,
      textPrimary,
      textSecondary,
      withFooter,
    } = this.props;

    if (withFooter === false || (!textPrimary && !textSecondary)) {
      return null;
    }

    return (
      <ModalFooter
          onClickPrimary={this.handleOnClickPrimary}
          onClickSecondary={this.handleOnClickSecondary}
          shouldStretchButtons={shouldStretchButtons}
          textPrimary={textPrimary}
          textSecondary={textSecondary}
          withFooter={withFooter} />
    );
  }

  render() {

    const {
      children,
      isVisible,
      shouldBeCentered,
    } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <Overlay isVisible={isVisible} onClose={this.handleOnClickOverlay}>
        <ModalOuterContainer onClick={this.handleOnClickOutside}>
          <ModalInnerContainer center={shouldBeCentered}>
            { this.renderHeaderComponent() }
            <ModalBody>
              { children }
            </ModalBody>
            { this.renderFooterComponent() }
          </ModalInnerContainer>
        </ModalOuterContainer>
      </Overlay>
    );
  }
}
