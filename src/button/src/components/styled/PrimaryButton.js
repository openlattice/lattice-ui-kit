import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const primaryStyle = css`
  background-color: ${PURPLES[2]};
  border-color: ${PURPLES[2]};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${WHITE};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const primaryHover = css`
  &:hover {
    background-color: ${PURPLES[1]};
    border-color: ${PURPLES[1]};
    cursor: pointer;
    text-decoration: none;
  }
`;

const primaryActive = css`
  &:active {
    background-color: ${PURPLES[0]};
    border-color: ${PURPLES[0]};
    text-decoration: none;
  }
`;

const primaryDisabled = css`
  &:disabled {
    background-color: ${NEUTRALS[6]};
    border-color: ${NEUTRALS[6]};
    color: ${NEUTRALS[2]};
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const PrimaryButton = styled.button`
  ${primaryStyle}
  ${primaryHover}
  ${primaryActive}
  ${primaryDisabled}
`;

export default PrimaryButton;
export {
  primaryActive,
  primaryDisabled,
  primaryHover,
  primaryStyle,
};
