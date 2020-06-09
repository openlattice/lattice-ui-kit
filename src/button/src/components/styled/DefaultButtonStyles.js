import { css } from 'styled-components';

import { NEUTRAL } from '../../../../colors';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const defaultStyle = css`
  background-color: ${NEUTRAL.N50};
  border-color: ${NEUTRAL.N50};
  color: ${NEUTRAL.N700};
`;

const defaultHover = css`
  background-color: ${NEUTRAL.N100};
  border-color: ${NEUTRAL.N100};
`;

const defaultActive = css`
  background-color: ${NEUTRAL.N200};
  border-color: ${NEUTRAL.N200};
  color: ${NEUTRAL.N700};
`;

const defaultDisabled = css`
  background-color: ${NEUTRAL.N00};
  border-color: ${NEUTRAL.N00};
  color: ${NEUTRAL.N500};
`;

const defaultFocus = css`
  box-shadow: ${NEUTRAL.N200} 0 0 0 2px;
`;

export {
  defaultActive,
  defaultDisabled,
  defaultFocus,
  defaultHover,
  defaultStyle,
};
