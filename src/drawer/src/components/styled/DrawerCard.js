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
  position: fixed;
  background-color: ${WHITE};
  height: 100%;
  width: 300px;
  top: 0;
  z-index: 900;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);

  ${getPosition};
`;

export default DrawerCard;
