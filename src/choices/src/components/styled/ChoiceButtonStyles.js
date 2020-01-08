import styled, { css } from 'styled-components';

import {
  defaultActive,
  defaultDisabled,
  defaultHover,
  defaultStyle,
} from '../../../../button/src/components/styled/DefaultButtonStyles';
import { PURPLES } from '../../../../colors';

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
  ${defaultStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out;

  input:hover ~ & {
    ${defaultHover}
  }

  input:focus-visible ~ & {
    box-shadow: ${PURPLES[1]} 0 0 0 1px;
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLES[6]};
    border: solid 1px ${PURPLES[1]};
    color: ${PURPLES[1]};
  }

  input:checked:hover ~ & {
    background-color: ${PURPLES[5]};
  }

  input:disabled ~ & {
    ${defaultDisabled}
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    ${defaultActive}
    cursor: not-allowed;
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default choiceButtonStyles;
