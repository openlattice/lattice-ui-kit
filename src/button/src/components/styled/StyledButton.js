/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const StyledButton :ReactComponentStyled<*> = styled.button`
  background-color: #fff;
  border-color: #c5d5e5;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #135;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    border-color: #95aabf;
  }

  &:disabled {
    border-color: #d9e3ec;
    color: #a3acb5;
    cursor: not-allowed;
  }
`;

export default StyledButton;
