/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';

const DEFAULT_PADDING :number = 30;
const VIEWPORT_PADDING :number = 120;

const getOuterContainerHeight = ({ viewportScrolling }) => {

  if (viewportScrolling) {
    return css`
      height: auto;
      min-height: 100%;
    `;
  }

  return css`
    height: 100%;
    min-height: 100%;
  `;
};

const getInnerContainerMargin = ({ center, viewportScrolling }) => {

  if (viewportScrolling) {
    return css`
      margin: ${VIEWPORT_PADDING}px 0;
    `;
  }

  if (!center) {
    return css`
      margin-top: ${VIEWPORT_PADDING}px;
    `;
  }

  return css`
    margin: 0;
  `;
};

const getInnerContainerMaxHeight = ({ viewportScrolling }) => {

  if (!viewportScrolling) {
    return css`
      max-height: calc(100vh - ${VIEWPORT_PADDING * 2}px);
    `;
  }

  return '';
};

export const ModalOuterContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  ${getOuterContainerHeight}
`;

/*
 * height & width are dynamically calculated based on the viewport:
 *   - the max-height is equal to the height of the viewport minus 2x the desired padding (bottom & top)
 *   - the max-width is equal to the width of the viewport minus 2x the desired padding (left & right)
 * for a centered modal, the parent container takes care of centering with flexbox
 * for a not-centered modal:
 *   - horizontal positioning is controlled by the parent container with flexbox, center by default
 *   - vertical positioning uses "margin-top", set to the desired viewport padding, half of what is subtracted
 */
export const ModalInnerContainer = styled.div`
  align-self: ${({ center }) => (center ? 'center' : 'flex-start')};
  background-color: ${WHITE};
  border-radius: 3px;
  box-shadow: 0 2px 8px -2px ${NEUTRALS[0]};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  max-width: calc(100vw - ${VIEWPORT_PADDING * 2}px);
  min-height: 200px; /* = 2 * 100px, where 100px is the "min-height" of ModalSection */
  min-width: 300px;
  position: relative;
  ${getInnerContainerMargin}
  ${getInnerContainerMaxHeight}
`;

/*
 * "min-height" 40px + "padding" 30px = 100px of total height
 */
export const ModalSection = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  min-height: 40px;
  /* overflow: scroll; */
  padding: ${DEFAULT_PADDING}px;
  position: relative;
`;

export const BodySection = styled(ModalSection)`
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 ${DEFAULT_PADDING}px;
`;

export const FooterSection = styled(ModalSection)`
  align-items: center;
  flex-direction: row-reverse;
`;

export const HeaderSection = styled(ModalSection)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
