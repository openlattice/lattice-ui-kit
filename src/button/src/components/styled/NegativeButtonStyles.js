import { css } from 'styled-components';

import { NEUTRAL, REDS } from '../../../../colors';

const negativeStyle = css`
  background-color: ${REDS[0]};
  border-color: ${REDS[0]};
  color: ${REDS[3]};
`;

const negativeHover = css`
  background-color: ${REDS[1]};
  border-color: ${REDS[1]};
  color: ${REDS[4]};
`;

const negativeActive = css`
  background-color: ${REDS[2]};
  border-color: ${REDS[2]};
    color: ${REDS[5]};
`;

const negativeDisabled = css`
  background-color: ${NEUTRAL.N00};
  border-color: ${NEUTRAL.N00};
  color: ${NEUTRAL.N500};
`;

const negativeFocus = css`
  box-shadow: ${REDS[2]} 0 0 0 2px;
`;

export {
  negativeActive,
  negativeDisabled,
  negativeFocus,
  negativeHover,
  negativeStyle,
};
