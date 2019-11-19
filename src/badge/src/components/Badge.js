// @flow
import styled from 'styled-components';
import * as Colors from '../../../colors';
import { getStyleVariation } from '../../../utils/StyleUtils';

const {
  GREENS,
  NEUTRALS,
  PURPLES,
  REDS,
  WHITE,
} = Colors;

const getBackgroundColor = getStyleVariation('mode', {
  added: GREENS[0],
  primary: PURPLES[2],
  removed: REDS[0],
  secondary: PURPLES[5],
  subtle: WHITE,
}, NEUTRALS[6]);

const getFontColor = getStyleVariation('mode', {
  added: GREENS[3],
  primary: WHITE,
  removed: REDS[3],
  secondary: PURPLES[1],
  subtle: PURPLES[2],
}, NEUTRALS[0]);

const Badge = styled.span`
  background-color: ${getBackgroundColor};
  border-radius: 32px;
  color: ${getFontColor};
  font-size: 12px;
  font-weight: normal;
  margin: 0 5px;
  padding: 3px 8px;
`;

export default Badge;
