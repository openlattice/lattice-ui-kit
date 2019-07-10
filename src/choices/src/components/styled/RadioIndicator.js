// @flow

import styled, { css } from 'styled-components';
import { PURPLES, WHITE } from '../../../../colors';
import type { IndicatorProps } from '../../../types';

const getAfterStyles = ({ checked } :IndicatorProps) => {
  if (!checked) {
    return css`
      display: none;
    `;
  }

  return css`
    content: '';
    background-color: ${WHITE};
    border-radius: 50%;
    height: 8px;
    left: 6px;
    position: absolute;
    top: 6px;
    width: 8px;
  `;
};


const RadioIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: ${PURPLES[6]};
  border-radius: 50%;

  :after {
    ${getAfterStyles}
  }
`;

export default RadioIndicator;
