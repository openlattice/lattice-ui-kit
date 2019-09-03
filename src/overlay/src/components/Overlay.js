/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import PropTypes from 'prop-types';
import ScrollLock from 'react-scrolllock';
import isFunction from 'lodash/isFunction';

import Portal from '../../../portal';
import { OverlayInnerContainer, OverlayOuterContainer } from './styled/StyledOverlayComponents';

type Props = {
  children :Node;
  isScrollable ?:boolean;
  isVisible :boolean;
  onClose ? :() => void;
  shouldCloseOnClick ? :boolean;
};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/blanket
 * https://github.com/segmentio/evergreen/blob/master/src/overlay/src/Overlay.js
 */
export default class Overlay extends Component<Props> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isScrollable: PropTypes.bool,
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    shouldCloseOnClick: PropTypes.bool,
  }

  static defaultProps = {
    isScrollable: false,
    onClose: undefined,
    shouldCloseOnClick: true,
  }

  close = () => {

    const { onClose } = this.props;
    if (onClose && isFunction(onClose)) {
      onClose();
    }
  }

  handleOnClick = (event :SyntheticEvent<HTMLElement>) => {

    const { shouldCloseOnClick } = this.props;
    if (event.target === event.currentTarget && shouldCloseOnClick) {
      event.preventDefault();
      this.close();
    }
  }

  render() {

    const { isVisible, children, isScrollable } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <Portal>
        <OverlayOuterContainer>
          <OverlayInnerContainer isScrollable={isScrollable} onClick={this.handleOnClick}>
            { children }
          </OverlayInnerContainer>
        </OverlayOuterContainer>
        <ScrollLock />
      </Portal>
    );
  }
}
