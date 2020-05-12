/*
 * @flow
 */

import styled from 'styled-components';

import AppContentOuterWrapper from './AppContentOuterWrapper';

import * as Colors from '../../../../../colors';

const { WHITE } = Colors;

const AppHeaderOuterWrapper = styled(AppContentOuterWrapper).attrs({
  as: 'header',
  bgColor: WHITE,
})`
  justify-content: flex-start;
`;

export default AppHeaderOuterWrapper;
