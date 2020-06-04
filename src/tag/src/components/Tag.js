// @flow
import styled from 'styled-components';

import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const {
  GREEN,
  NEUTRAL,
  PURPLE,
  RED,
  YELLOW,
} = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  danger: RED.R300,
  neutral: NEUTRAL.N700,
  primary: PURPLE.P300,
  secondary: PURPLE.P100,
  success: GREEN.G300,
  warning: YELLOW.Y300
}, NEUTRAL.N100);

const getFontColor = getStyleVariation('mode', {
  danger: 'white',
  neutral: 'white',
  primary: 'white',
  secondary: PURPLE.P300,
  success: 'white',
  warning: NEUTRAL.N700
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
