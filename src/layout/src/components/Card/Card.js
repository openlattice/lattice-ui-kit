// @flow

import styled, { css } from 'styled-components';
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
  border-radius: 5px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;

  & > div {
    border-bottom: 1px solid ${NEUTRALS[4]};
  }

  & > div:first-child {
    border-radius: 5px 5px 0 0;
  }

  & > div:last-child {
    border-bottom: 0;
    border-radius: 0 0 5px 5px;
  }

  ${getHoverStyles};
`;

export default Card;
