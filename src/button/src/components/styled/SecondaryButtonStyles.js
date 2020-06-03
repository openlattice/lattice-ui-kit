import { css } from 'styled-components';

import { NEUTRALS, PURPLE } from '../../../../colors';

const secondaryStyle = css`
  background-color: ${PURPLE.P100};
  border-color: ${PURPLE.P100};
  color: ${PURPLE.P400};
`;

const secondaryHover = css`
  background-color: ${PURPLE.P200};
  border-color: ${PURPLE.P200};
`;

const secondaryActive = css`
  background-color: ${PURPLE.P300};
  border-color: ${PURPLE.P300};
  color: white;
`;

const secondaryDisabled = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
`;

const secondaryFocus = css`
  box-shadow: ${PURPLE.P300} 0 0 0 2px;
`;

export {
  secondaryActive,
  secondaryDisabled,
  secondaryFocus,
  secondaryHover,
  secondaryStyle,
};
