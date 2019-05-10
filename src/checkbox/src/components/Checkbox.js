// @flow
import React from 'react';
import { CheckboxIndicator, CheckboxInput, CheckboxLabel } from './styled';

type Props = {
  disabled :boolean;
  onChange :(value :any) => void;
  onKeyDown :(e :SyntheticKeyboardEvent<*>) => void;
  value :any;
  label :string;
  name :string;
  checked :boolean;
}

const Checkbox = ({
  checked,
  label,
  ...rest
} :Props) => (
  <CheckboxLabel checked={checked}>
    {label}
    <CheckboxInput
        checked={checked}
        {...rest} />
    <CheckboxIndicator />
  </CheckboxLabel>
);

export default Checkbox;
