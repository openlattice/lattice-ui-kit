/*
 * @flow
 */

import styled from 'styled-components';

import AppContentInnerWrapper from './AppContentInnerWrapper';
import { APP_CONTENT_PADDING } from '../../../../../style/Sizes';

const AppNavigationInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

export default AppNavigationInnerWrapper;
