import { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';
import { getStyleVariation } from '../../../../utils/StyleUtils';

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const fontColorVariation = getStyleVariation('fontColor', {
  dark: NEUTRALS[0],
  light: WHITE,
});

const neutralStyle = css`
  background-color: transparent;
  border-color: transparent;
  color: ${fontColorVariation};
  font-weight: 600;
`;

const neutralHover = css`
  background-color: rgba(255, 255, 255, 0.2);
`;

const neutralActive = css`
  background-color: rgba(255, 255, 255, 0.5);
  color: ${fontColorVariation};
`;

const neutralDisabled = css`
  background-color: transparent;
  border-color: transparent;
  color: ${fontColorVariation};
`;

const neutralFocus = css`
  box-shadow: ${NEUTRALS[2]} 0 0 0 2px;
`;

export {
  neutralActive,
  neutralDisabled,
  neutralFocus,
  neutralHover,
  neutralStyle,
};
