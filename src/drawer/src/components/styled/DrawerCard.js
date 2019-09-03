// @flow

import styled, { css } from 'styled-components';
import { WHITE } from '../../../../colors';

type Props = {
  side :'left' | 'right';
};

const getPosition = (props :Props) => {
  const { side } = props;
  switch (side) {
    case 'right':
      return css`
        right: 0;
      `;

    case 'left':
    default:
      return css`
        left: 0;
      `;
  }
};

const DrawerCard = styled.div`
  background-color: ${WHITE};
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  position: fixed;
  top: 0;
  width: 300px;
  z-index: 900;

  ${getPosition};
`;

export default DrawerCard;
