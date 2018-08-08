/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

// TODO: centralize z-index layering
export const OverlayOuterContainer :ReactComponentStyled<*> = styled.div`
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const OverlayInnerContainer :ReactComponentStyled<*> = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
`;
