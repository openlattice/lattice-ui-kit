// @flow

import styled from 'styled-components';
import CardSegment from '../CardSegment/CardSegment';
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

  & > ${CardSegment} {
    border-bottom: 1px solid ${NEUTRALS[4]};
  }

  & > ${CardSegment}:first-child {
    border-radius: 3px 3px 0 0;
  }

  & > ${CardSegment}:last-child {
    border-bottom: 0;
    border-radius: 0 0 3px 3px;
  }

  ${getHoverStyles};
`;

export default Card;
