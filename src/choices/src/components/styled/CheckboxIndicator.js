import styled, { css } from 'styled-components';
import { PURPLES, WHITE } from '../../../../colors';
import choiceIndicatorStyles from './ChoiceIndicatorStyles';

const afterStyles = css`
  content: '';
  border: solid ${WHITE};
  top: 4px;
  width: 5px;
  border-width: 0 2px 2px 0;
  box-sizing: border-box;
  height: 10px;
  left: 8px;
  position: absolute;
  transform: rotate(45deg) scale(1);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const CheckboxIndicator = styled.div`
  background-color: ${PURPLES[6]};
  border-radius: 3px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
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
