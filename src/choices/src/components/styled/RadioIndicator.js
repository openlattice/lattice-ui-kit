import styled, { css } from 'styled-components';

import choiceIndicatorStyles from './ChoiceIndicatorStyles';
import { duration } from '../../../../style/transitions';
import { PURPLES, WHITE } from '../../../../colors';

const afterStyles = css`
  content: '';
  background-color: ${WHITE};
  border-radius: 50%;
  height: 8px;
  left: 6px;
  position: absolute;
  top: 6px;
  width: 8px;
  transition: transform ${duration.standard} ease-in-out,
    opacity ${duration.standard} ease-in-out;
`;

const RadioIndicator = styled.div`
  background-color: ${PURPLES[6]};
  border-radius: 100%;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color ${duration.swift} ease-in-out,
    box-shadow ${duration.swift} ease-in-out;
  width: 20px;

  ${choiceIndicatorStyles};

  input:not(:checked) ~ &:after,
  input:checked ~ &:after {
    ${afterStyles}
  }

  input:not(:checked) ~ &:after {
    opacity: 0;
    transform: scale(0);
  }

  input:checked ~ &:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export default RadioIndicator;
