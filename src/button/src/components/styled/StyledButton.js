/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';
import { color, themeGet, complexStyle } from 'styled-system';
import theme from '../../../../theme/theme';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px

export const buttonStyle = complexStyle({
  prop: 'buttonStyle',
  key: 'buttons'
});

export const colorStyles = complexStyle({
  prop: 'colors',
  key: 'colorStyles',
});

// Apply complexStyles utils last to properly override
const StyledButton :ReactComponentStyled<*> = styled.button`
  background-color: ${themeGet('colors.grey', 'grey')};
  border-color: #c5d5e5;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: 'black';
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;

  &:hover {
    border-color: #95aabf;
  }

  &:disabled {
    border-color: #d9e3ec;
    color: #a3acb5;
    cursor: not-allowed;
  }

  ${color};
  ${buttonStyle};
  ${colorStyles};
`;

StyledButton.defaultProps = {
  theme
};

export default StyledButton;
