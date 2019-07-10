// @flow
import React from 'react';
import {
  RadioIndicator,
  RadioInput,
  RadioLabel,
} from './styled';

type Props = {
  checked ? :boolean;
  disabled ? :boolean;
  label ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  readOnly ? :boolean;
  value ? :any;
};

const Radio = ({
  checked,
  disabled,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  readOnly,
  value
} :Props) => (
  <RadioLabel>
    <div>{label}</div>
    <RadioInput
        checked={checked}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        readOnly={readOnly}
        value={value} />
    <RadioIndicator />
  </RadioLabel>
);

Radio.defaultProps = {
  checked: undefined,
  disabled: false,
  label: undefined,
  name: undefined,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  readOnly: undefined,
  value: undefined,
};

export default Radio;
