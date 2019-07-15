import styled, { css } from 'styled-components';

const inputStyles = css`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;
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
