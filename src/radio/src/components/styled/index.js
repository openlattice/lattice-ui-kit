// @flow
import styled, { css } from 'styled-components';
import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const RadioLabel = styled.label`
  align-items: center;
  color: ${NEUTRALS[0]};
  display: inline-flex;
  margin: 10px 0;
  min-height: 20px;
  padding-left: 30px;
  pointer-events: ${props => (props.readOnly ? 'none' : 'auto')};
  position: relative;
`;

const RadioInput = styled.input.attrs(() => ({
  type: 'radio'
}))`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

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
  transition: background-color 0.1s ease-in-out;
  width: 20px;

  ${RadioInput}:hover ~ &,
  ${RadioInput}:focus ~ & {
    background-color: ${NEUTRALS[1]};
  }

  ${RadioInput}:checked ~ & {
    background-color: ${PURPLES[2]};
  }

  ${RadioInput}:checked:hover ~ &,
  ${RadioInput}:checked:focus ~ & {
    background-color: ${PURPLES[1]};
  }

  ${RadioInput}:disabled ~ & {
    background-color: ${PURPLES[6]};
    cursor: not-allowed;
  }

  ${RadioInput}:checked:disabled ~ & {
    background-color: ${NEUTRALS[2]};
  }

  ${RadioInput}:not(:checked) ~ &:after,
  ${RadioInput}:checked ~ &:after {
    ${afterStyles}
  }

  ${RadioInput}:not(:checked) ~ &:after {
    opacity: 0;
    transform: scale(0);
  }

  ${RadioInput}:checked ~ &:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export {
  RadioLabel,
  RadioInput,
  RadioIndicator,
};
