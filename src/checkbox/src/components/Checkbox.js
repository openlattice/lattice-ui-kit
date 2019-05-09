// @flow
import React from 'react';
import styled, { css } from 'styled-components';

const Control = styled.label`
  display: inline-block;
  position: relative;
  color: ${props => (props.checked ? '#2e2e34' : '#8e929b')};
  font-size: 14px;
  font-weight: normal;
  margin: 12px 0;
  min-height: 20px;
  padding: 0 10px 0 30px;
  vertical-align: middle;

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

const CheckboxInput = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  z-index: -1;
  opacity: 0;
  vertical-align: middle;
  
  :focus + div {
    background: #ccc;
  }
`;

const CheckboxIndicatorStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6f7;
  border-radius: 3px;

  ${Control}:hover input ~ &,
  ${Control} input:focus & {
    background: #ccc;
    cursor: pointer;
  }

  ${Control} input:checked ~ & {
    background: #6124e2;
  }

  ${Control} input:disabled ~ & {
    background: #e6e6f7;
    cursor: default;
  }

  ${Control} input:checked:disabled ~ &{
    background: #b6bbc7;
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);

    ${Control} input:checked ~ & {
      display: block;
    }

    ${Control} & {
      left: 8px;
      top: 4px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const CheckboxIndicator = styled.div`
  ${CheckboxIndicatorStyles}
`;

type Props = {
  disabled :boolean;
  onChange :(value :any) => void;
  onKeyDown :(e :SyntheticKeyboardEvent<*>) => void;
  value :any;
  label :string;
  name :string;
  checked :boolean;
}

const StyledCheckbox = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  onKeyDown,
  value,
} :Props) => (
  <Control checked={checked}>
    {label}
    <CheckboxInput
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled} />
    <CheckboxIndicator />
  </Control>
);

export {
  CheckboxIndicator,
  CheckboxIndicatorStyles,
  CheckboxInput,
  Control,
  StyledCheckbox
};
