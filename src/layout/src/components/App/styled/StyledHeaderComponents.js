/*
 * @flow
 */

import styled from 'styled-components';

import * as Colors from '../../../../../colors';
import { AppContentInnerWrapper, AppContentOuterWrapper } from './StyledContentComponents';
import { APP_CONTENT_PADDING } from '../../../../../style/Sizes';

const { NEUTRALS, WHITE } = Colors;

const AppHeaderOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
  bgColor: WHITE,
})`
  border-bottom: 1px solid ${NEUTRALS[5]};
`;

const AppHeaderInnerWrapper = styled(AppContentInnerWrapper)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${APP_CONTENT_PADDING}px;
`;

export {
  AppHeaderInnerWrapper,
  AppHeaderOuterWrapper,
};
