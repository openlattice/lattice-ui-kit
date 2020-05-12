/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { APP_CONTENT_PADDING, APP_CONTENT_WIDTH } from '../../../../../style/Sizes';
import { media } from '../../../../../utils/StyleUtils';

type Props = {
  padding :?number;
};

const getComputedStyles = ({ padding } :Props) => {

  let finalPadding = `${APP_CONTENT_PADDING}px`;
  if (typeof padding === 'string') {
    finalPadding = padding;
  }

  return css`
    padding: ${finalPadding};
    ${media.phone`
      padding: ${() => padding || 20}px;
    `}
  `;
};

const AppContentInnerWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  max-width: ${APP_CONTENT_WIDTH}px;
  min-width: 0;
  position: relative;
  width: 100%;
  ${getComputedStyles}
`;

export default AppContentInnerWrapper;
