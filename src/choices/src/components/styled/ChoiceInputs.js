import styled, { css } from 'styled-components';
import { PURPLES, NEUTRALS } from '../../../../colors';

const inputStyles = css`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;

  :hover + div,
  :focus + div {
    background: ${NEUTRALS[1]};
  }

  :checked + div {
    background: ${PURPLES[2]};
  }

  :checked:hover + div,
  :checked:focus + div {
    background: ${PURPLES[1]};
  }

  :disabled + div {
    background: ${PURPLES[6]};
    cursor: not-allowed;
  }

  :checked:disabled + div {
    background: ${NEUTRALS[2]};
  }
`;

const RadioInput = styled.input.attrs(() => ({
  type: 'radio'
}))`
  ${inputStyles}
`;

const CheckboxInput = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  ${inputStyles};
`;

export {
  CheckboxInput,
  RadioInput
};
