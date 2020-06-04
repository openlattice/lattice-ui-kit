import styled from 'styled-components';

import CardSegment from '../CardSegment/CardSegment';
import {
  GREEN_1,
  NEUTRAL,
  PURPLE,
  RED_1,
  WHITE,
  YELLOW_1,
} from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

const backgroundColor = getStyleVariation('mode', {
  danger: RED_1,
  default: NEUTRAL.N700,
  primary: PURPLE.P300,
  secondary: PURPLE.P100,
  success: GREEN_1,
  warning: YELLOW_1
});

const getFontColor = getStyleVariation('mode', {
  danger: WHITE,
  default: WHITE,
  primary: WHITE,
  secondary: PURPLE.P300,
  success: WHITE,
  warning: NEUTRAL.N700,
});

const CardHeader = styled(CardSegment).attrs(() => ({
  as: 'header'
}))`
  align-items: baseline;
  background-color: ${backgroundColor};
  color: ${getFontColor};
  flex: none;
  transition: background-color ${duration.standard} ease-out,
    color ${duration.standard} ease-out;
`;

export default CardHeader;
