// @flow
import styled from 'styled-components';
import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const {
  GREEN_1,
  NEUTRALS,
  PURPLES,
  RED_1,
  WHITE,
  YELLOW_1,
} = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  danger: RED_1,
  neutral: NEUTRALS[0],
  primary: PURPLES[2],
  secondary: PURPLES[5],
  success: GREEN_1,
  warning: YELLOW_1
}, NEUTRALS[6]);

const getFontColor = getStyleVariation('mode', {
  danger: WHITE,
  neutral: WHITE,
  primary: WHITE,
  secondary: PURPLES[1],
  success: WHITE,
  warning: NEUTRALS[0]
}, NEUTRALS[0]);

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
