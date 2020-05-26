/*
 * @flow
 */

import styled from 'styled-components';

import * as Colors from '../../../../colors';
import { getHoverStyles } from '../../../../utils/StyleUtils';

const { NEUTRALS, WHITE } = Colors;

const Card = styled.div`
  background-color: ${WHITE};
  border: 1px solid ${NEUTRALS[4]};
  border-radius: 3px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  ${getHoverStyles};
`;

export default Card;
