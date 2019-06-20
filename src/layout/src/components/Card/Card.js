// @flow

import styled, { css } from 'styled-components';
import CardSegment from '../CardSegment/CardSegment';
import * as Colors from '../../../../colors';

const { NEUTRALS, WHITE } = Colors;

type CardProps = {
  onClick :Function;
}

const getHoverStyles = ({ onClick } :CardProps) => {
  if (onClick) {
    return css`
      :hover {
        box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15);
        cursor: pointer;

        * {
          cursor: inherit;
          pointer-events: auto;
        }
      }

      :active {
        box-shadow: none;
      }
    `;
  }

  return null;
};

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
