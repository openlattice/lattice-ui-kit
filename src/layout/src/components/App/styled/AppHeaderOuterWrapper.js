/*
 * @flow
 */

import styled from 'styled-components';

import AppContentOuterWrapper from './AppContentOuterWrapper';
import * as Colors from '../../../../../colors';

const { NEUTRALS, WHITE } = Colors;

const AppHeaderOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
  bgColor: WHITE,
})`
  border-bottom: 1px solid ${NEUTRALS[5]};
`;

export default AppHeaderOuterWrapper;
