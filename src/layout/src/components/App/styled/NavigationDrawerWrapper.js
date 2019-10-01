/*
 * @flow
 */

import styled from 'styled-components';

const NavigationDrawerWrapper = styled.div`
  height: calc(100vh - ${({ topOffset }) => topOffset}px);
  overflow: hidden; /* this is super important as it hides the unwanted drawer box shadow */
  position: absolute;
  width: 100%;
`;

export default NavigationDrawerWrapper;
