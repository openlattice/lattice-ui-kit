/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

import { OVERLAY_BG } from '../../../../colors';

const FixedTransparentBackground :ReactComponentStyled<*> = styled.div`
  background-color: ${OVERLAY_BG};
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export default FixedTransparentBackground;
