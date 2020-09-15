/*
 * @flow
 */

import styled from 'styled-components';

import { APP_CONTENT_WIDTH, APP_CONTENT_PADDING } from '../../../../../style/Sizes';
import { media } from '../../../../../utils/StyleUtils';

const AppContentInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: flex-start;
  max-width: ${APP_CONTENT_WIDTH + (2 * APP_CONTENT_PADDING)}px;
  min-width: 0;
  padding: ${APP_CONTENT_PADDING}px;
  position: relative;
  width: 100%;
  ${media.phone`
    padding: ${APP_CONTENT_PADDING / 2}px;
  `}
`;

export default AppContentInnerWrapper;
