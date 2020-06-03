/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';
import { media } from '../../../../utils/StyleUtils';

const DEFAULT_PADDING :string = '30px';
const LARGE_PADDING :string = '60px';

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

const getInnerContainerMaxHeight = ({ viewportScrolling }) => {

  if (!viewportScrolling) {
    return css`
      max-height: 100%;
    `;
  }

  return '';
};

const getScrollBehavior = ({ viewportScrolling }) => {
  if (viewportScrolling) {
    return css`
      overflow-x: visible;
      overflow-y: visible;
    `;
  }

  return css`
    overflow-x: hidden;
    overflow-y: auto;
  `;
};

export const ModalOuterContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: ${LARGE_PADDING};

  ${media.phone`
    padding: ${DEFAULT_PADDING};
  `}
  ${getOuterContainerHeight}
`;

/*
 * max height & width are bounded by the ModalOuterContainer padding
 * alignment is handled by flexbox
 */
export const ModalInnerContainer = styled.div`
  align-self: ${({ center }) => (center ? 'center' : 'flex-start')};
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 8px -2px ${NEUTRALS[0]};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  max-width: 100%;
  min-height: 200px; /* = 2 * 100px, where 100px is the "min-height" of ModalSection */
  min-width: 300px;
  position: relative;

  ${getInnerContainerMaxHeight}
`;

/*
 * "min-height" 40px + "padding" 30px = 100px of total height
 */
export const ModalSection = styled.div`
  color: ${NEUTRALS[0]};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  min-height: 40px;
  padding: ${DEFAULT_PADDING};
  position: relative;
`;

export const BodySection = styled(ModalSection)`
  flex: 1 1 auto;
  padding: 0 ${DEFAULT_PADDING};
  ${getScrollBehavior}
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
