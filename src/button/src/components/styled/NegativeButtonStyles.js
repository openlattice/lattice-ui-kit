import { css } from 'styled-components';

import { NEUTRALS, REDS } from '../../../../colors';

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
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
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
