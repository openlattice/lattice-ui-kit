// @flow
import styled from 'styled-components';

import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const {
  GREEN_1,
  NEUTRAL,
  PURPLE,
  RED_1,
  WHITE,
  YELLOW_1,
} = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  danger: RED_1,
  neutral: NEUTRAL.N700,
  primary: PURPLE.P300,
  secondary: PURPLE.P100,
  success: GREEN_1,
  warning: YELLOW_1
}, NEUTRAL.N100);

const getFontColor = getStyleVariation('mode', {
  danger: WHITE,
  neutral: WHITE,
  primary: WHITE,
  secondary: PURPLE.P300,
  success: WHITE,
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
