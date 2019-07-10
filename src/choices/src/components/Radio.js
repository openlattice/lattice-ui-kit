// @flow
import React from 'react';
import {
  ChoiceLabel,
  RadioIndicator,
  RadioInput,
} from './styled';

type Props = {
  checked ? :boolean;
  disabled ? :boolean;
  label ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
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
  <ChoiceLabel>
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
  </ChoiceLabel>
);

Radio.defaultProps = {
  checked: undefined,
  disabled: false,
  label: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  readOnly: undefined,
  value: undefined,
};

export default Radio;
