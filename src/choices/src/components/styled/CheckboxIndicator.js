// @flow

import styled, { css } from 'styled-components';
import { PURPLES, WHITE, NEUTRALS } from '../../../../colors';

const afterStyles = css`
  content: '';
  border: solid ${WHITE};
  border-width: 0 2px 2px 0;
  height: 8px;
  left: 8px;
  position: absolute;
  top: 4px;
  width: 3px;
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
    transform: rotate(45deg) scale(0);
  }

  input:checked ~ &:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

export default CheckboxIndicator;
