// @flow

import styled, { css } from 'styled-components';
import { PURPLES, WHITE, NEUTRALS } from '../../../../colors';

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
  transition: background-color 0.2s ease-in-out;
  width: 20px;

  input:hover ~ &,
  input:focus ~ & {
    background-color: ${NEUTRALS[1]};
  }

  input:checked ~ & {
    background-color: ${PURPLES[2]};
  }

  input:checked:hover ~ &,
  input:checked:focus ~ & {
    background-color: ${PURPLES[1]};
  }

  input:disabled ~ & {
    background-color: ${PURPLES[6]};
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    background-color: ${NEUTRALS[2]};
  }

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
