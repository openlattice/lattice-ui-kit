import { css } from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../colors';

const primaryStyle = css`
  background-color: ${PURPLE.P300};
  border-color: ${PURPLE.P300};
  color: white;
`;

const primaryHover = css`
  background-color: ${PURPLE.P400};
  border-color: ${PURPLE.P400};
`;

const primaryActive = css`
  background-color: ${PURPLE.P500};
  border-color: ${PURPLE.P500};
`;

const primaryDisabled = css`
  background-color: ${NEUTRAL.N00};
  border-color: ${NEUTRAL.N00};
  color: ${NEUTRAL.N500};
`;

const primaryFocus = css`
  box-shadow: ${PURPLE.P500} 0 0 0 2px;
`;

export {
  primaryActive,
  primaryDisabled,
  primaryFocus,
  primaryHover,
  primaryStyle,
};
