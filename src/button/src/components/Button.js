/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import PropTypes from 'prop-types';

import DefaultButton from './styled/DefaultButton';
import PrimaryButton from './styled/PrimaryButton';
import SecondaryButton from './styled/SecondaryButton';

type ButtonType =
  | 'default'
  | 'primary'
  | 'secondary';

type Props = {
  children :Node;
  className ? :string;
  onClick :() => void;
  type ? :ButtonType;
};

type State = {};

export default class Button extends Component<Props, State> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    type: 'default',
  }

  render() {

    const {
      children,
      className,
      onClick,
      type,
    } = this.props;

    switch (type) {
      case 'primary':
        return (
          <PrimaryButton className={className} onClick={onClick}>
            { children }
          </PrimaryButton>
        );
      case 'secondary':
        return (
          <SecondaryButton className={className} onClick={onClick}>
            { children }
          </SecondaryButton>
        );
      default:
        return (
          <DefaultButton className={className} onClick={onClick}>
            { children }
          </DefaultButton>
        );
    }
  }
}
