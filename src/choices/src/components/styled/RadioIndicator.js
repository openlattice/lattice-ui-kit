import styled, { css } from 'styled-components';

import choiceIndicatorStyles from './ChoiceIndicatorStyles';
import { duration } from '../../../../style/transitions';
import { PURPLES, WHITE } from '../../../../colors';

const afterStyles = css`
  content: '';
  background-color: ${WHITE};
  border-radius: 50%;
  height: 8px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  transition: transform ${duration.standard} ease-out,
    opacity ${duration.standard} ease-out;
`;

const RadioIndicator = styled.span`
  background-color: ${PURPLES[6]};
  border-radius: 100%;
  display: inline-block;
  height: 20px;
  transition: background-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out;
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
