/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

import { OVERLAY_BG } from '../../../../colors';

// TODO: centralize z-index layering
export const OverlayOuterContainer :ReactComponentStyled<*> = styled.div`
  background-color: ${OVERLAY_BG};
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const OverlayInnerContainer :ReactComponentStyled<*> = styled.div`
  display: block;
  height: 100%;
  position: absolute;
  overflow-y: ${({ isScrollable }) => (isScrollable ? 'scroll' : 'visible')};
  width: 100%;
`;
