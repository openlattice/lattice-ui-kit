import { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../../colors';

const secondaryStyle = css`
  background-color: ${PURPLES[5]};
  border-color: ${PURPLES[5]};
  color: ${PURPLES[1]};
`;

const secondaryHover = css`
  background-color: ${PURPLES[4]};
  border-color: ${PURPLES[4]};
`;

const secondaryActive = css`
  background-color: ${PURPLES[3]};
  border-color: ${PURPLES[3]};
`;

const secondaryDisabled = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
`;

const secondaryFocus = css`
  box-shadow: ${PURPLES[3]} 0 0 0 2px;
`;

export {
  secondaryActive,
  secondaryDisabled,
  secondaryFocus,
  secondaryHover,
  secondaryStyle,
};
