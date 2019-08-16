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

/* eslint-disable react/jsx-props-no-spreading */
const Checkbox = ({
  id,
  label,
  ...rest
} :Props) => (
  <ChoiceLabel htmlFor={id}>
    {label}
    <CheckboxInput
        id={id}
        {...rest} />
    <CheckboxIndicator />
  </ChoiceLabel>
);
/* eslint-enable */

Checkbox.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
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
