import styled, { css } from 'styled-components';

import choiceButtonStyles from './ChoiceButtonStyles';
import choiceIndicatorStyles from './ChoiceIndicatorStyles';

import { PURPLES } from '../../../../colors';
import { duration } from '../../../../style/transitions';
import { getStyleVariation } from '../../../../utils/StyleUtils';

const afterStyles = css`
  border-color: white;
  border-style: solid;
  border-width: 0 2px 2px 0;
  box-sizing: border-box;
  content: '';
  height: 10px;
  left: 7px;
  position: absolute;
  top: 4px;
  transform: rotate(45deg) scale(1);
  transition: transform ${duration.standard} ease-out,
    opacity ${duration.standard} ease-out;
  width: 6px;
`;

const checkboxWithAfterStyles = css`
  background-color: ${PURPLES[6]};
  border-radius: 3px;
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
    transform: rotate(45deg) scale(0);
  }

  input:checked ~ &:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

const getIndicatorStyles = getStyleVariation('mode', {
  button: choiceButtonStyles
}, checkboxWithAfterStyles);

const CheckboxIndicator = styled.span`
  transition: background-color ${duration.swift} ease-out,
    border-color ${duration.swift} ease-out,
    box-shadow ${duration.swift} ease-out,
    color ${duration.swift} ease-out;

  ${getIndicatorStyles}
`;

export default CheckboxIndicator;
export {
  getIndicatorStyles
};
