/*
 * @flow
 */

import styled from 'styled-components';

import AppContentInnerWrapper from './AppContentInnerWrapper';
import { APP_CONTENT_PADDING } from '../../../../../style/Sizes';

const AppHeaderInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

export default AppHeaderInnerWrapper;
