import styled from 'styled-components';
import CardSegment from '../CardSegment/CardSegment';
import {
  GREEN_1,
  NEUTRALS,
  PURPLES,
  RED_1,
  WHITE,
  YELLOW_1,
} from '../../../../colors';
import { getStyleVariation } from '../../../../utils/StyleUtils';

const backgroundColor = getStyleVariation('mode', {
  danger: RED_1,
  default: NEUTRALS[0],
  primary: PURPLES[2],
  secondary: PURPLES[5],
  success: GREEN_1,
  warning: YELLOW_1
});

const getFontColor = getStyleVariation('mode', {
  danger: WHITE,
  default: WHITE,
  primary: WHITE,
  secondary: PURPLES[1],
  success: WHITE,
  warning: NEUTRALS[0],
});

const CardHeader = styled(CardSegment).attrs({
  as: 'header'
})`
  background-color: ${backgroundColor};
  color: ${getFontColor};
  align-items: baseline;
`;

export default CardHeader;
