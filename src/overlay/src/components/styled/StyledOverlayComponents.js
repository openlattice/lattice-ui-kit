/*
 * @flow
 */

import styled from 'styled-components';

import { OVERLAY_BG } from '../../../../colors';

// TODO: centralize z-index layering
export const OverlayOuterContainer = styled.div`
  background-color: ${OVERLAY_BG};
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
`;

export const OverlayInnerContainer = styled.div`
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
`;
