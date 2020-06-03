import { css } from 'styled-components';

import { NEUTRALS, PURPLE, PURPLES } from '../../../../colors';

const secondaryStyle = css`
  background-color: ${PURPLE.P100};
  border-color: ${PURPLE.P100};
  color: ${PURPLE.P300};
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
