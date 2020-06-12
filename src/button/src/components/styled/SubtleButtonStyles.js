import { css } from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../colors';

const subtleStyle = css`
  background-color: transparent;
  border-color: transparent;
  color: ${PURPLE.P300};
`;

const subtleHover = css`
  background-color: rgba(0, 0, 0, 0.1);
`;

const subtleActive = css`
  background-color: rgba(0, 0, 0, 0.15);
`;

const subtleDisabled = css`
  background-color: transparent;
  border-color: transparent;
  color: ${NEUTRAL.N500};
`;

const subtleFocus = css`
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 2px;
`;

export {
  subtleActive,
  subtleDisabled,
  subtleFocus,
  subtleHover,
  subtleStyle,
};
