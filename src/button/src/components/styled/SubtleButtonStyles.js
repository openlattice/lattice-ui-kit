import { css } from 'styled-components';

import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const subtleStyle = css`
  background-color: ${WHITE};
  border-color: ${WHITE};
  color: ${PURPLES[1]};
`;

const subtleHover = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
`;

const subtleActive = css`
  background-color: ${PURPLES[6]};
  border-color: ${PURPLES[6]};
`;

const subtleDisabled = css`
  background-color: ${WHITE};
  border-color: ${WHITE};
  color: ${NEUTRALS[2]};
`;

const subtleFocus = css`
  box-shadow: ${PURPLES[4]} 0 0 0 2px;
`;

export {
  subtleActive,
  subtleDisabled,
  subtleFocus,
  subtleHover,
  subtleStyle,
};
