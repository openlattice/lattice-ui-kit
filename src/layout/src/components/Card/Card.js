// @flow

import styled from 'styled-components';
import * as Colors from '../../../../colors';

const { NEUTRALS, WHITE } = Colors;

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
`;

export default Card;
