/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { APP_CONTAINER_MIN_WIDTH, APP_CONTENT_PADDING } from '../../../../../style/Sizes';


type AppContentOuterWrapperProps = {
  bgColor :?string;
};

const getOuterComputedStyles = ({ bgColor } :AppContentOuterWrapperProps) => {

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

type AppContentInnerWrapperProps = {
  contentWidth :?number;
};

const getInnerComputedStyles = ({ contentWidth } :AppContentInnerWrapperProps) => {

  let finalWidth;
  let finalMaxWidth;
  let finalMinWidth = `${APP_CONTAINER_MIN_WIDTH}px`;

  if (contentWidth) {
    // setting "max-width" along with "width: 100%" instead of just "width" achieves the same effect when the browser
    // is really wide, however, it additionally allows the content width to shrink with the browser, which I think
    // would be desired behavior
    finalMaxWidth = `${contentWidth}px`;
    finalMinWidth = 0; // not sure what this should be set to
    finalWidth = '100%';
  }

  return css`
    max-width: ${finalMaxWidth};
    min-width: ${finalMinWidth};
    width: ${finalWidth};
  `;
};

const AppContentInnerWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${APP_CONTENT_PADDING}px;
  position: relative;
  ${getInnerComputedStyles}
`;

export {
  AppContentInnerWrapper,
  AppContentOuterWrapper,
};
