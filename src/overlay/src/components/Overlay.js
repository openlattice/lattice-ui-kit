/*
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import type { Node } from 'react';

import Portal from '../../../portal';

import FixedTransparentBackground from './styled/FixedTransparentBackground';
import OverlayInnerContainer from './styled/OverlayInnerContainer';
import OverlayOuterContainer from './styled/OverlayOuterContainer';

type Props = {
  children :Node;
  isVisible :boolean;
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
    isVisible: PropTypes.bool
  }

  static defaultProps = {
    isVisible: false
  }

  constructor(props :Props) {

    super(props);

    this.state = {
      isVisible: props.isVisible
    };
  }

  componentWillReceiveProps(nextProps :Props) {

    if (nextProps.isVisible) {
      this.setState({ isVisible: true });
    }
  }

  close = () => {
    this.setState({ isVisible: false });
  }

  handleOnClick = (event :SyntheticEvent<HTMLElement>) => {

    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  render() {

    if (!this.state.isVisible) {
      return null;
    }

    return (
      <Portal>
        <OverlayOuterContainer>
          <FixedTransparentBackground onClick={this.handleOnClick} />
          <OverlayInnerContainer>
            { this.props.children }
          </OverlayInnerContainer>
        </OverlayOuterContainer>
      </Portal>
    );
  }
}
