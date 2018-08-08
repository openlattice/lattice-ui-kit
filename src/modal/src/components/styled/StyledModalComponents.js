/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';

const DEFAULT_PADDING :number = 30;
const VIEWPORT_PADDING :number = DEFAULT_PADDING;

/*
 * height & width are dynamically calculated based on the viewport
 *   - the height is equal to the height of the viewport minus 2x the desired padding (bottom & top)
 *   - the width is equal to the width of the viewport minus 2x the desired padding (left & right)
 * to center horizontally, "left" and "right" are set to 0 and "margin: 0 auto" takes care of centering
 * to center vertically, "top" is set to the desired viewport padding, half of what is subtracted
 */
export const ModalOuterContainer :ReactComponentStyled<*> = styled.div`
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  height: calc(100vh - ${VIEWPORT_PADDING * 2}px);
  justify-content: center;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: ${VIEWPORT_PADDING}px;
  width: calc(100vw - ${VIEWPORT_PADDING * 2}px);
`;

export const ModalInnerContainer :ReactComponentStyled<*> = styled.div`
  background-color: ${WHITE};
  border-radius: 4px;
  box-shadow: 0 2px 8px -2px ${NEUTRALS[0]};
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  max-height: calc(100vh - ${VIEWPORT_PADDING * 2}px);
  max-width: calc(100vw - ${VIEWPORT_PADDING * 2}px);
  overflow: scroll;
  position: relative;
`;

export const ModalSection :ReactComponentStyled<*> = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  overflow: scroll;
  padding: ${DEFAULT_PADDING}px;
  position: relative;
`;

export const BodySection :ReactComponentStyled<*> = styled(ModalSection)`
  padding: 0 ${DEFAULT_PADDING}px;
`;

export const FooterSection :ReactComponentStyled<*> = styled(ModalSection)`
  align-items: center;
  flex-direction: row-reverse;
`;

export const HeaderSection :ReactComponentStyled<*> = styled(ModalSection)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
