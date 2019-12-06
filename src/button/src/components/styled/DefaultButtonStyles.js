import { css } from 'styled-components';

import { NEUTRALS } from '../../../../colors';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const defaultStyle = css`
  background-color: ${NEUTRALS[7]};
  border-color: ${NEUTRALS[7]};
  color: ${NEUTRALS[0]};
`;

const defaultHover = css`
  background-color: ${NEUTRALS[5]};
  border-color: ${NEUTRALS[5]};
`;

const defaultActive = css`
  background-color: ${NEUTRALS[4]};
  border-color: ${NEUTRALS[4]};
  color: ${NEUTRALS[0]};
`;

const defaultDisabled = css`
  background-color: ${NEUTRALS[7]};
  border-color: ${NEUTRALS[7]};
  color: ${NEUTRALS[2]};
`;

const defaultFocus = css`
  box-shadow: ${NEUTRALS[4]} 0 0 0 2px;
`;

export {
  defaultActive,
  defaultDisabled,
  defaultFocus,
  defaultHover,
  defaultStyle,
};
