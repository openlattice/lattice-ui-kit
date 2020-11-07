// @flow
import styled from 'styled-components';

import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const {
  BLUE,
  GREEN,
  MAGENTA,
  NEUTRAL,
  PURPLE,
  ORANGE,
} = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  danger: MAGENTA.M00,
  neutral: NEUTRAL.N700,
  info: BLUE.B00,
  primary: PURPLE.P300,
  secondary: PURPLE.P00,
  success: GREEN.G00,
  warning: ORANGE.O00
}, NEUTRAL.N100);

const getFontColor = getStyleVariation('mode', {
  danger: MAGENTA.M400,
  neutral: NEUTRAL.N00,
  info: BLUE.B400,
  primary: PURPLE.P00,
  secondary: PURPLE.P400,
  success: GREEN.G400,
  warning: ORANGE.O400
}, NEUTRAL.N700);

const Tag = styled.span`
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  margin: 0 5px;
  padding: 0 5px;
  text-transform: uppercase;

  background-color: ${getBackgroundColor};
  color: ${getFontColor};
`;

export default Tag;
