import styled, { css } from 'styled-components';

import choiceButtonStyles from './ChoiceButtonStyles';
import choiceIndicatorStyles from './ChoiceIndicatorStyles';

import { NEUTRAL } from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

const afterStyles = css`
  content: '';
  background-color: white;
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

const radioWithAfterStyles = css`
  background-color: ${NEUTRAL.N50};
  border-radius: 100%;
  display: inline-block;
  height: 20px;
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

const getIndicatorStyles = getStyleVariation('mode', {
  button: choiceButtonStyles
}, radioWithAfterStyles);

const RadioIndicator = styled.span`
  transition: background-color ${duration.swift} ease-out,
    border-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out,
    color ${duration.swift} ease-out;

  ${getIndicatorStyles};
`;

export default RadioIndicator;
export {
  getIndicatorStyles
};
