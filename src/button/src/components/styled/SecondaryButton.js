import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../../colors';

const secondaryStyle = css`
  background-color: ${PURPLES[5]};
  border-color: ${PURPLES[5]};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${PURPLES[1]};
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
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
    background-color: ${NEUTRALS[4]};
    border-color: ${NEUTRALS[4]};
    color: ${NEUTRALS[1]};
    cursor: not-allowed;
    text-decoration: none;
  }
`;

const SecondaryButton = styled.button`
  ${secondaryStyle}
  ${secondaryHover}
  ${secondaryActive}
  ${secondaryDisabled}
`;

export default SecondaryButton;
export {
  secondaryActive,
  secondaryDisabled,
  secondaryHover,
  secondaryStyle,
};
