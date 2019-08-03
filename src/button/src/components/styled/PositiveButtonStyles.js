import { css } from 'styled-components';

import { GREENS, NEUTRALS } from '../../../../colors';

const positiveStyle = css`
  background-color: ${GREENS[0]};
  border-color: ${GREENS[0]};
  color: ${GREENS[3]};
`;

const positiveHover = css`
  background-color: ${GREENS[1]};
  border-color: ${GREENS[1]};
  color: ${GREENS[4]};
`;

const positiveActive = css`
  background-color: ${GREENS[2]};
  border-color: ${GREENS[2]};
    color: ${GREENS[5]};
`;

const positiveDisabled = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
`;

const positiveFocus = css`
  box-shadow: ${GREENS[2]} 0 0 0 2px;
`;

export {
  positiveActive,
  positiveDisabled,
  positiveFocus,
  positiveHover,
  positiveStyle,
};
