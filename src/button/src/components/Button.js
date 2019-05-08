/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';

import PropTypes from 'prop-types';

import DefaultButton from './styled/DefaultButton';
import PrimaryButton from './styled/PrimaryButton';
import SecondaryButton from './styled/SecondaryButton';

type ButtonMode =
  | 'default'
  | 'primary'
  | 'secondary';

type Props = {
  children :Node;
  className ? :string;
  disabled ? :boolean;
  mode ? :ButtonMode;
  onClick :(e :SyntheticEvent<HTMLButtonElement>) => void;
  type ? :string;
};

type State = {};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/button
 * https://evergreen.surge.sh/components/buttons
 */
export default class Button extends Component<Props, State> {

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    mode: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    disabled: false,
    mode: 'default',
    type: 'button',
  }

  render() {

    const {
      children,
      className,
      disabled,
      mode,
      onClick,
      type,
    } = this.props;

    switch (mode) {
      case 'primary':
        return (
          <PrimaryButton className={className} disabled={disabled} onClick={onClick} type={type}>
            { children }
          </PrimaryButton>
        );
      case 'secondary':
        return (
          <SecondaryButton className={className} disabled={disabled} onClick={onClick} type={type}>
            { children }
          </SecondaryButton>
        );
      default:
        return (
          <DefaultButton className={className} disabled={disabled} onClick={onClick} type={type}>
            { children }
          </DefaultButton>
        );
    }
  }
}
