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
    border: solid ${WHITE};
    border-width: 0 2px 2px 0;
    height: 8px;
    left: 8px;
    position: absolute;
    top: 4px;
    transform: rotate(45deg);
    width: 3px;
  `;
};

const CheckboxIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: ${PURPLES[6]};
  border-radius: 3px;

  :after {
    ${getAfterStyles}
  }
`;

export default CheckboxIndicator;
