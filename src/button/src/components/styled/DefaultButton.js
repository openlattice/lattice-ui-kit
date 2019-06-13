/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const defaultStyle = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color: ${NEUTRALS[1]};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  white-space: nowrap;
`;

const defaultHover = css`
  &:hover {
    background-color: ${NEUTRALS[4]};
    border-color: ${NEUTRALS[4]};
    cursor: pointer;
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
    background-color: ${NEUTRALS[6]};
    border-color: ${NEUTRALS[6]};
    color: ${NEUTRALS[2]};
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const defaultFocus = css`
  &:focus-visible {
    box-shadow: ${NEUTRALS[2]} 0 0 0 2px;
  }
`;

const DefaultButton = styled.button`
  ${defaultStyle}
  ${defaultHover}
  ${defaultActive}
  ${defaultFocus}
  ${defaultDisabled}
`;

export default DefaultButton;
export {
  defaultActive,
  defaultDisabled,
  defaultHover,
  defaultStyle,
};
