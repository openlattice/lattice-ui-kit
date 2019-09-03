import styled, { css } from 'styled-components';

import choiceIndicatorStyles from './ChoiceIndicatorStyles';
import { duration } from '../../../../style/transitions';
import { PURPLES, WHITE } from '../../../../colors';


const afterStyles = css`
  content: '';
  border: solid ${WHITE};
  border-width: 0 2px 2px 0;
  box-sizing: border-box;
  height: 10px;
  left: 8px;
  position: absolute;
  top: 4px;
  width: 5px;
  transform: rotate(45deg) scale(1);
  transition: transform ${duration.standard} ease-in-out,
    opacity ${duration.standard} ease-in-out;
`;

const CheckboxIndicator = styled.div`
  background-color: ${PURPLES[6]};
  border-radius: 3px;
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
    transform: rotate(45deg) scale(0);
  }

  input:checked ~ &:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

export default CheckboxIndicator;
