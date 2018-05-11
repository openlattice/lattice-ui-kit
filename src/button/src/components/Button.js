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

  render() {

    return (
      <StyledButton onClick={this.props.onClick}>{ this.props.children }</StyledButton>
    );
  }
}
