/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

// TODO: centralize z-index layering
const OverlayOuterContainer :ReactComponentStyled<*> = styled.div`
  position: relative;
  z-index: 1000;
`;

export default OverlayOuterContainer;
