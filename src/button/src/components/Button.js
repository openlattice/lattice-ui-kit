/*
 * @flow
 */

import React, { Component } from 'react';

import StyledButton from './styled/StyledButton';

type Props = {
  children ? :Node;
  onClick ? :(e :SyntheticEvent<>) => void;
};

type State = {};

export default class Button extends Component<Props, State> {

  static defaultProps = {
    children: null,
    onClick: () => {}
  }

  render() {

    return (
      <StyledButton {...this.props} onClick={this.props.onClick}>{ this.props.children }</StyledButton>
    );
  }
}
