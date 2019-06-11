import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../../colors';

const secondaryStyle = css`
  background-color: ${PURPLES[5]};
  border-color: ${PURPLES[5]};
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  color: ${PURPLES[1]};
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

const secondaryHover = css`
  &:hover {
    background-color: ${PURPLES[4]};
    border-color: ${PURPLES[4]};
    cursor: pointer;
    text-decoration: none;
  }
`;

const secondaryActive = css`
  &:active {
    background-color: ${PURPLES[3]};
    border-color: ${PURPLES[3]};
    text-decoration: none;
  }
`;

const secondaryDisabled = css`
  &:disabled {
    background-color: ${NEUTRALS[6]};
    border-color: ${NEUTRALS[6]};
    color: ${NEUTRALS[2]};
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const secondaryFocus = css`
  &:focus-visible {
    box-shadow: ${PURPLES[3]} 0 0 0 2px;
  }
`;

const SecondaryButton = styled.button`
  ${secondaryStyle}
  ${secondaryHover}
  ${secondaryActive}
  ${secondaryFocus}
  ${secondaryDisabled}
`;

export default SecondaryButton;
export {
  secondaryActive,
  secondaryDisabled,
  secondaryHover,
  secondaryStyle,
};
