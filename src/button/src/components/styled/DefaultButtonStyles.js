import { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const defaultStyle = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[1]};
`;

const defaultHover = css`
  background-color: ${NEUTRALS[4]};
  border-color: ${NEUTRALS[4]};
`;

const defaultActive = css`
  background-color: ${NEUTRALS[2]};
  border-color: ${NEUTRALS[2]};
  color: ${WHITE};
`;

const defaultDisabled = css`
  background-color: ${NEUTRALS[6]};
  border-color: ${NEUTRALS[6]};
  color: ${NEUTRALS[2]};
`;

const defaultFocus = css`
  box-shadow: ${NEUTRALS[2]} 0 0 0 2px;
`;

export {
  defaultActive,
  defaultDisabled,
  defaultFocus,
  defaultHover,
  defaultStyle,
};
