import { css } from 'styled-components';

import { NEUTRALS } from '../../../../colors';

const getFontColor = (props) => {
  const { fontColor } = props;
  if (fontColor) {
    return css`
      color: ${fontColor};
    `;
  }

  return css`
    color: white;
  `;
};

// border-top + border-bottom + padding-top + padding-bottom + line-height = 40px
const neutralStyle = css`
  background-color: transparent;
  border-color: transparent;
  font-weight: 600;
  ${getFontColor};
`;

const neutralHover = css`
  background-color: rgba(255, 255, 255, 0.2);
`;

const neutralActive = css`
  background-color: rgba(255, 255, 255, 0.5);
`;

const neutralDisabled = css`
  background-color: transparent;
  border-color: transparent;
  ${getFontColor};
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
