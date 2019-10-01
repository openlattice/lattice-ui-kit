/*
 * @flow
 */

import styled, { css } from 'styled-components';

type Props = {
  bgColor :?string;
};

const getOuterComputedStyles = ({ bgColor } :Props) => {

  let finalBackgroundColor = '';
  if (bgColor) {
    finalBackgroundColor = bgColor;
  }

  return css`
    background-color: ${finalBackgroundColor};
  `;
};

const AppContentOuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  justify-content: center;
  /*overflow: hidden;*/ /* TODO: make it work with overflow hidden */
  position: relative;
  ${getOuterComputedStyles}
`;

export default AppContentOuterWrapper;
