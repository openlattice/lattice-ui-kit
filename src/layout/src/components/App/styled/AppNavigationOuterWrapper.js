/*
 * @flow
 */

import styled from 'styled-components';

import AppContentOuterWrapper from './AppContentOuterWrapper';

const AppNavigationOuterWrapper = styled(AppContentOuterWrapper).attrs((props) => ({
  as: 'nav',
  bgColor: props.bgColor,
  borderless: props.borderless,
}))`
  justify-content: flex-start;
`;

export default AppNavigationOuterWrapper;
