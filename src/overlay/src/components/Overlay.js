/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import Portal from '../../../portal';
import { OverlayInnerContainer, OverlayOuterContainer } from './styled/StyledOverlayComponents';

type Props = {
  children :Node;
  isVisible :boolean;
  onClose ? :() => void;
  shouldCloseOnClick ? :boolean;
};

type State = {
  isVisible :boolean;
}

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/blanket
 * https://github.com/segmentio/evergreen/blob/master/src/overlay/src/Overlay.js
 */
export default class Overlay extends Component<Props, State> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    shouldCloseOnClick: PropTypes.bool,
  }

  static defaultProps = {
    onClose: undefined,
    shouldCloseOnClick: true,
  }

  constructor(props :Props) {

    super(props);

    this.state = {
      isVisible: props.isVisible,
    };
  }

  componentWillReceiveProps(nextProps :Props) {

    if (nextProps.isVisible) {
      this.setState({ isVisible: true });
    }
    else if (!nextProps.isVisible) {
      this.setState({ isVisible: false });
    }
  }

  close = () => {

    this.setState({ isVisible: false });

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

    const { children } = this.props;
    const { isVisible } = this.state;

    if (!isVisible) {
      return null;
    }

    return (
      <Portal>
        <OverlayOuterContainer>
          <OverlayInnerContainer onClick={this.handleOnClick}>
            { children }
          </OverlayInnerContainer>
        </OverlayOuterContainer>
      </Portal>
    );
  }
}
