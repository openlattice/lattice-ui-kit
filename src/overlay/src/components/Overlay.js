/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

import Portal from '../../../portal';
import FixedTransparentBackground from './styled/FixedTransparentBackground';
import { OverlayInnerContainer, OverlayOuterContainer } from './styled/StyledOverlayComponents';

type Props = {
  children :Node;
  isVisible :boolean;
  onClick ? :() => void;
};

type State = {
  isVisible :boolean;
}

/*
 * Inspiration:
 * https://github.com/segmentio/evergreen/blob/master/src/overlay/src/Overlay.js
 * https://bitbucket.org/atlassian/atlaskit-mk-2/src/master/packages/core/blanket
 */
export default class Overlay extends Component<Props, State> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    isVisible: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: undefined,
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
  }

  handleOnClick = (event :SyntheticEvent<HTMLElement>) => {

    const { onClick } = this.props;

    if (event.target === event.currentTarget) {
      if (isFunction(onClick)) {
        onClick();
      }
      else {
        event.preventDefault();
        this.close();
      }
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
          <FixedTransparentBackground />
          <OverlayInnerContainer onClick={this.handleOnClick}>
            { children }
          </OverlayInnerContainer>
        </OverlayOuterContainer>
      </Portal>
    );
  }
}
