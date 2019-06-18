import { css } from 'styled-components';

import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const primaryStyle = css`
  background-color: ${PURPLES[2]};
  border-color: ${PURPLES[2]};
  color: ${WHITE};
`;

const primaryHover = css`
  background-color: ${PURPLES[1]};
  border-color: ${PURPLES[1]};
`;

const primaryActive = css`
  background-color: ${PURPLES[0]};
  border-color: ${PURPLES[0]};
`;

const primaryDisabled = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
`;

const primaryFocus = css`
  box-shadow: ${PURPLES[0]} 0 0 0 2px;
`;

export {
  primaryActive,
  primaryDisabled,
  primaryFocus,
  primaryHover,
  primaryStyle,
};
