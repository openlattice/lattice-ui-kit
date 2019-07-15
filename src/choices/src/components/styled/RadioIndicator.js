import styled, { css } from 'styled-components';
import { PURPLES, WHITE } from '../../../../colors';
import choiceIndicatorStyles from './ChoiceIndicatorStyles';

const afterStyles = css`
  content: '';
  background-color: ${WHITE};
  border-radius: 50%;
  height: 8px;
  left: 6px;
  position: absolute;
  top: 6px;
  width: 8px;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
`;

const RadioIndicator = styled.div`
  background-color: ${PURPLES[6]};
  border-radius: 100%;
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
    transform: scale(0);
  }

  input:checked ~ &:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export default RadioIndicator;
