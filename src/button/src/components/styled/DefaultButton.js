/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const defaultStyle = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${NEUTRALS[1]};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const defaultHover = css`
  &:hover {
    background-color: ${NEUTRALS[4]};
    border-color: ${NEUTRALS[4]};
    text-decoration: none;
  }
`;

const defaultActive = css`
  &:active {
    background-color: ${NEUTRALS[2]};
    border-color: ${NEUTRALS[2]};
    color: ${WHITE};
    text-decoration: none;
  }
`;

const defaultDisabled = css`
  &:disabled {
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const DefaultButton = styled.button`
  ${defaultStyle}
  ${defaultHover}
  ${defaultActive}
  ${defaultDisabled}
`;

export default DefaultButton;
export {
  defaultActive,
  defaultDisabled,
  defaultHover,
  defaultStyle,
};
