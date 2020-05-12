/*
 * @flow
 */

import styled from 'styled-components';

import AppContentInnerWrapper from './AppContentInnerWrapper';

import { APP_CONTENT_PADDING } from '../../../../../style/Sizes';
import { media } from '../../../../../utils/StyleUtils';

const AppHeaderInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${APP_CONTENT_PADDING}px;
  max-width: none;
  width: auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

export default AppHeaderInnerWrapper;
