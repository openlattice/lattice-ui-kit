// @flow
import React from 'react';
import { CheckboxIndicator, CheckboxInput, ChoiceLabel } from './styled';

type Props = {
  checked ? :boolean;
  defaultChecked ? :boolean;
  disabled ? :boolean;
  id ? :string;
  label ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  readOnly ? :boolean;
  value ? :any;
}

const Checkbox = ({
  checked,
  defaultChecked,
  disabled,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  readOnly,
  value,
  ...rest
} :Props) => (
  <ChoiceLabel readOnly={readOnly} htmlFor={id}>
    {label}
    <CheckboxInput
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        readOnly={readOnly}
        value={value}
        {...rest} />
    <CheckboxIndicator />
  </ChoiceLabel>
);

Checkbox.defaultProps = {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  id: undefined,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  readOnly: undefined,
  value: undefined,
};

export default Checkbox;
