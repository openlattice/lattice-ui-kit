/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import ContentWrapper from './styled/ContentWrapper';
import Content from './styled/Content';
import ButtonSpinner from './styled/ButtonSpinner';
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
  isLoading ? :boolean;
  mode ? :ButtonMode;
  onClick :(e :SyntheticEvent<HTMLButtonElement>) => void;
  type ? :string;
};

/*
 * Inspiration:
 * https://atlaskit.atlassian.com/packages/core/button
 * https://evergreen.surge.sh/components/buttons
 */
const Button = (props :Props) => {

  const {
    children,
    disabled,
    isLoading,
    mode,
    ...rest
  } = props;

  let ButtonComponent;

  switch (mode) {
    case 'primary':
      ButtonComponent = PrimaryButton;
      break;
    case 'secondary':
      ButtonComponent = SecondaryButton;
      break;
    default:
      ButtonComponent = DefaultButton;
  }

  return (
    <ButtonComponent {...rest} disabled={isLoading || disabled}>
      <ContentWrapper>
        { isLoading && <ButtonSpinner /> }
        <Content isLoading={isLoading}>
          {children}
        </Content>
      </ContentWrapper>
    </ButtonComponent>
  );
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  isLoading: false,
  mode: 'default',
  type: 'button',
};

export default Button;
