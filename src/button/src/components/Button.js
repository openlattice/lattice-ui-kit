/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import ContentWrapper from './styled/ContentWrapper';
import Content from './styled/Content';
import ButtonSpinner from './styled/ButtonSpinner';
import StyledButton from './styled/StyledButton';

type ButtonMode =
  | 'default'
  | 'negative'
  | 'positive'
  | 'primary'
  | 'secondary'
  | 'subtle'
  | 'neutral';

type Props = {
  children ?:Node;
  className ?:string;
  disabled ?:boolean;
  isLoading ?:boolean;
  fontColor ?:string;
  mode ?:ButtonMode;
  onClick :(e :SyntheticEvent<HTMLButtonElement>) => void;
  type ?:string;
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
    ...rest
  } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <StyledButton {...rest} disabled={isLoading || disabled}>
      <ContentWrapper>
        { isLoading && <ButtonSpinner /> }
        <Content isLoading={isLoading}>
          {children}
        </Content>
      </ContentWrapper>
    </StyledButton>
  );
  /* eslint-enable */
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  isLoading: false,
  fontColor: '',
  mode: 'default',
  type: 'button',
};

export default Button;

export type {
  ButtonMode,
  Props,
};
