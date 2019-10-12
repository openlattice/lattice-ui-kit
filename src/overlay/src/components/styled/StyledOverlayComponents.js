/*
 * @flow
 */

import styled from 'styled-components';

import { OVERLAY_BG } from '../../../../colors';
import { fadeTransitionStyles } from '../../../../transitions';

// TODO: centralize z-index layering
export const OverlayOuterContainer = styled.div`
  background-color: ${(props) => (props.transparent ? 'transparent' : OVERLAY_BG)};
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  ${fadeTransitionStyles};
`;

OverlayOuterContainer.displayName = 'OverlayOuterContainer';

export const OverlayInnerContainer = styled.div`
  display: block;
  height: 100%;
  position: absolute;
  overflow-y: ${({ isScrollable }) => (isScrollable ? 'scroll' : 'visible')};
  width: 100%;
`;

OverlayInnerContainer.displayName = 'OverlayInnerContainer';
