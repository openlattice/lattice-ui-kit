import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../../colors';

export const RadioInputContainer = styled.input.attrs({
  type: 'radio'
})`
  opacity: 0;
  height: 100%;
  width: 100%;
  margin: 10px 10px 10px;
`;

export const RadioContainer = styled.label`
  display: flex;
  width: 100%;
`;

const choiceButtonStyles = css`
  padding: 10px 12px;
  width: 100%;
  min-width: 84px;
  height: ${(props) => (props.large ? '56px' : '40px')};
  border-radius: 3px;
  background-color: ${NEUTRALS[6]};
  border: solid 1px ${NEUTRALS[6]};
  color: ${NEUTRALS[1]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  input:enabled:not(:checked) ~ & {
    background-color: ${NEUTRALS[3]};
    cursor: pointer;
  }

  input:checked ~ & {
    background-color: ${PURPLES[5]};
    border: solid 1px ${PURPLES[1]};
    color: ${PURPLES[1]};
  }

  input:disabled ~ & {
    cursor: not-allowed;
  }

  input:disabled:checked ~ & {
    background-color: ${NEUTRALS[2]};
    border: solid 1px ${NEUTRALS[1]};
    cursor: not-allowed;
  }
`;

export default choiceButtonStyles;
