/*
 * @flow
 */

import React, { Component } from 'react';
import type { ComponentType, Element, Node } from 'react';

import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import Overlay from '../../../overlay';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import { ModalOuterContainer, ModalInnerContainer } from './styled/StyledModalComponents';
import { ESC_KEY_CODE } from '../../../utils/keycodes';

import type { ModalFooterProps } from './ModalFooter';
import type { ModalHeaderProps } from './ModalHeader';

type ModalProps = {
  children :Node;
  isVisible :boolean;
  modalRef :{ current :null | HTMLElement };
  onClickPrimary ?:() => void;
  onClickSecondary ?:() => void;
  onClose :() => void;
  shouldBeCentered ?:boolean;
  shouldCloseOnEscape ?:boolean;
  shouldCloseOnOutsideClick ?:boolean;
  shouldStretchButtons ?:boolean;
  textPrimary ?:string;
  textSecondary ?:string;
  textTitle ?:string;
  viewportScrolling ?:boolean;
  withFooter ?:Element<any> | ComponentType<ModalFooterProps> | boolean;
  withHeader ?:Element<any> | ComponentType<ModalHeaderProps> | boolean;
};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/modal-dialog
 * https://evergreen.surge.sh/components/dialog
 */
export default class Modal extends Component<ModalProps> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    modalRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
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
    viewportScrolling: PropTypes.bool,
    withFooter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
    withHeader: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]),
  }

  static defaultProps = {
    modalRef: undefined,
    onClickPrimary: undefined,
    onClickSecondary: undefined,
    shouldBeCentered: true,
    shouldCloseOnEscape: true,
    shouldCloseOnOutsideClick: true,
    shouldStretchButtons: false,
    textPrimary: undefined,
    textSecondary: undefined,
    textTitle: '',
    viewportScrolling: false,
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

  renderHeaderComponent = () => {

    const {
      textTitle,
      withHeader,
    } = this.props;

    if (!withHeader) {
      return null;
    }

    // $FlowFixMe
    const { type: { name = null } = {} } = withHeader;
    if (name === ModalHeader.name) {
      return withHeader;
    }

    if (withHeader) {
      return (
        <ModalHeader
            onClickClose={this.close}
            textTitle={textTitle}
            withHeader={withHeader} />
      );
    }

    return null;
  }

  renderFooterComponent = () => {

    const {
      shouldStretchButtons,
      textPrimary,
      textSecondary,
      withFooter,
    } = this.props;

    if (!withFooter) {
      return null;
    }

    // $FlowFixMe
    const { type: { name = null } = {} } = withFooter;
    if (name === ModalFooter.name) {
      return withFooter;
    }

    if (withFooter || textPrimary || textSecondary) {
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

    return null;
  }

  render() {

    const {
      children,
      isVisible,
      modalRef,
      shouldBeCentered,
      viewportScrolling,
    } = this.props;

    return (
      <Overlay isScrollable={viewportScrolling} isVisible={isVisible} onClose={this.handleOnClickOverlay}>
        <ModalOuterContainer onClick={this.handleOnClickOutside} ref={modalRef} viewportScrolling={viewportScrolling}>
          <ModalInnerContainer center={shouldBeCentered} viewportScrolling={viewportScrolling}>
            { this.renderHeaderComponent() }
            <ModalBody viewportScrolling={viewportScrolling}>
              { children }
            </ModalBody>
            { this.renderFooterComponent() }
          </ModalInnerContainer>
        </ModalOuterContainer>
      </Overlay>
    );
  }
}

export type { ModalProps };
