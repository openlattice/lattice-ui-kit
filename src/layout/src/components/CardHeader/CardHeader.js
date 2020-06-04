import styled from 'styled-components';

import CardSegment from '../CardSegment/CardSegment';
import {
  GREEN,
  NEUTRAL,
  PURPLE,
  RED,
  YELLOW,
} from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

const backgroundColor = getStyleVariation('mode', {
  danger: RED.R100,
  default: NEUTRAL.N100,
  primary: PURPLE.P300,
  secondary: PURPLE.P100,
  success: GREEN.G100,
  warning: YELLOW.Y100,
});

const getFontColor = getStyleVariation('mode', {
  danger: RED.R400,
  default: NEUTRAL.N900,
  primary: 'white',
  secondary: PURPLE.P300,
  success: GREEN.G400,
  warning: YELLOW.Y400,
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
