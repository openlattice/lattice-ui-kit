/*
 * @flow
 */

import styled from 'styled-components';
import type { ReactComponentStyled } from 'styled-components';

import { Neutrals } from '../../../../colors';

const FixedTransparentBackground :ReactComponentStyled<*> = styled.div`
  background-color: ${Neutrals.N1_A4};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export default FixedTransparentBackground;
