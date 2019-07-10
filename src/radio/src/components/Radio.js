// @flow
import React from 'react';
import {
  RadioIndicator,
  RadioInput,
  RadioLabel,
} from './styled';

type Props = {
  disabled ? :boolean;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  value ? :any;
  label ? :string;
  name ? :string;
  checked ? :boolean;
  readOnly ? :boolean;
};

const Radio = ({
  checked,
  disabled,
  label,
  name,
  readOnly,
  onChange,
  value
} :Props) => (
  <RadioLabel>
    <div>{label}</div>
    <RadioInput
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        name={name}
        onChange={onChange}
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
  readOnly: undefined,
  value: undefined,
};

export default Radio;
