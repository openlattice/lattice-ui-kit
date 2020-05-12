/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../../../../colors';

type Props = {
  bgColor :?string;
  borderless :boolean;
};

const getComputedStyles = ({ bgColor, borderless } :Props) => {

  let finalBackgroundColor;
  let finalBorderBottom;
  if (typeof bgColor === 'string') {
    finalBackgroundColor = bgColor;
    finalBorderBottom = `1px solid ${NEUTRALS[5]}`;
  }

  if (borderless === true) {
    finalBorderBottom = undefined;
  }

  return css`
    background-color: ${finalBackgroundColor};
    border-bottom: ${finalBorderBottom};
  `;
};

const AppContentOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
  ${getComputedStyles}
`;

export default AppContentOuterWrapper;
