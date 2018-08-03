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

    const { children, onClick } = this.props;

    return (
      <StyledButton onClick={onClick}>
        { children }
      </StyledButton>
    );
  }
}
