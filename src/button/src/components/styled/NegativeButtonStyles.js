import { css } from 'styled-components';

import { NEUTRAL, RED } from '../../../../colors';

const negativeStyle = css`
  background-color: ${RED.R00};
  border-color: ${RED.R00};
  color: ${RED.R300};
`;

const negativeHover = css`
  background-color: ${RED.R100};
  border-color: ${RED.R100};
  color: ${RED.R400};
`;

const negativeActive = css`
  background-color: ${RED.R200};
  border-color: ${RED.R200};
  color: ${RED.R500};
`;

const negativeDisabled = css`
  background-color: ${NEUTRAL.N00};
  border-color: ${NEUTRAL.N00};
  color: ${NEUTRAL.N500};
`;

const negativeFocus = css`
  box-shadow: ${RED.R200} 0 0 0 2px;
`;

export {
  negativeActive,
  negativeDisabled,
  negativeFocus,
  negativeHover,
  negativeStyle,
};
