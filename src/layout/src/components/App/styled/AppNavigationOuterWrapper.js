/*
 * @flow
 */

import styled from 'styled-components';

import AppContentOuterWrapper from './AppContentOuterWrapper';
import * as Colors from '../../../../../colors';

const { NEUTRALS } = Colors;

const AppNavigationOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
})`
  background-color: ${({ bgColor }) => (bgColor || undefined)};
  border-bottom: ${({ borderless }) => (borderless ? undefined : `1px solid ${NEUTRALS[5]}`)};
`;

export default AppNavigationOuterWrapper;
