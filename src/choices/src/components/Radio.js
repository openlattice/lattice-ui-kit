// @flow
import React from 'react';
import { ChoiceLabel, RadioIndicator, RadioInput } from './styled';

type Props = {
  checked ? :boolean;
  disabled ? :boolean;
  id ? :string;
  label ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  readOnly ? :boolean;
  value ? :any;
};

/* eslint-disable react/jsx-props-no-spreading */
const Radio = ({
  label,
  id,
  ...rest
} :Props) => (
  <ChoiceLabel htmlFor={id}>
    {label}
    <RadioInput
        id={id}
        {...rest} />
    <RadioIndicator />
  </ChoiceLabel>
);
/* eslint-enable */

Radio.defaultProps = {
  checked: undefined,
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

export default Radio;
