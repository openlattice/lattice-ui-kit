/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled, { css } from 'styled-components';
import { APP_CONTAINER_MAX_WIDTH, APP_CONTAINER_MIN_WIDTH } from '../../../../style/Sizes';

type Props = {
  bgColor :?string;
  children :Node;
  className :?string;
  contentWidth :?number;
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
  flex: 0 0 auto;
  justify-content: center;
  /*overflow: hidden;*/ /* TODO: make it work with overflow hidden */
  position: relative;
  ${getOuterComputedStyles}
`;

const getInnerComputedStyles = ({ contentWidth } :Props) => {

  let finalMaxWidth = APP_CONTAINER_MAX_WIDTH;
  let finalWidth;
  if (contentWidth) {
    // setting "max-width" along with "width: 100%" instead of just "width" achieves the same effect when the browser
    // is really wide, however, it additionally allows the content width to shrink with the browser, which I think
    // would be desired behavior
    finalMaxWidth = contentWidth;
    finalWidth = '100%';
  }

  if (finalMaxWidth > APP_CONTAINER_MAX_WIDTH) {
    finalMaxWidth = APP_CONTAINER_MAX_WIDTH;
  }

  return css`
    max-width: ${finalMaxWidth}px;
    min-width: ${APP_CONTAINER_MIN_WIDTH}px;
    width: ${finalWidth};
  `;
};

const AppContentInnerWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: 30px;
  position: relative;
  ${getInnerComputedStyles}
`;

const AppContentWrapper = ({
  bgColor,
  children,
  className,
  contentWidth,
} :Props) => (
  <AppContentOuterWrapper bgColor={bgColor} className={className}>
    <AppContentInnerWrapper contentWidth={contentWidth}>
      {children}
    </AppContentInnerWrapper>
  </AppContentOuterWrapper>
);


AppContentWrapper.defaultProps = {
  bgColor: undefined,
  className: undefined,
  contentWidth: undefined,
};

export default AppContentWrapper;
export {
  AppContentInnerWrapper,
  AppContentOuterWrapper,
};
