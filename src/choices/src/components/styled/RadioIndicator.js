import styled, { css } from 'styled-components';

import choiceButtonStyles from './ChoiceButtonStyles';
import choiceIndicatorStyles from './ChoiceIndicatorStyles';

import { PURPLES, WHITE } from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

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

const choiceWithAfterStyles = css`
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

const getIndicatorStyles = getStyleVariation('mode', {
  button: choiceButtonStyles
}, choiceWithAfterStyles);

const RadioIndicator = styled.span`
  background-color: ${PURPLES[6]};
  border-radius: 100%;
  display: inline-block;
  height: 20px;
  transition: background-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out;
  width: 20px;

  ${getIndicatorStyles};
`;

export default RadioIndicator;
