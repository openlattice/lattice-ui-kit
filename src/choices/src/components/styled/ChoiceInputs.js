import styled, { css } from 'styled-components';

const inputStyles = css`
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%;
  z-index: -1;
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
