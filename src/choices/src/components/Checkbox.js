// @flow
import React from 'react';

import {
  CheckboxIndicator,
  CheckboxInput,
  ChoiceInnerWrapper,
  ChoiceLabel,
  ChoiceText,
  ChoiceWrapper,
} from './styled';

type Props = {
  checked ? :boolean;
  defaultChecked ? :boolean;
  disabled ? :boolean;
  id ? :string;
  label ? :string;
  mode ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticFocusEvent<HTMLInputElement>) => void;
  readOnly ? :boolean;
  value ? :any;
}

/* eslint-disable react/jsx-props-no-spreading */
const Checkbox = ({
  disabled,
  id,
  label,
  mode,
  readOnly,
  ...rest
} :Props) => (
  <ChoiceLabel htmlFor={id} readOnly={readOnly} disabled={disabled}>
    <ChoiceWrapper>
      <ChoiceInnerWrapper>
        <CheckboxInput
            id={id}
            readOnly={readOnly}
            disabled={disabled || readOnly}
            // $FlowFixMe
            {...rest} />
        <CheckboxIndicator />
      </ChoiceInnerWrapper>
    </ChoiceWrapper>
    {
      mode !== 'button' && (
        <ChoiceText>
          {label}
        </ChoiceText>
      )
    }
  </ChoiceLabel>
);
/* eslint-enable */

Checkbox.defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  disabled: false,
  id: undefined,
  label: undefined,
  mode: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  readOnly: undefined,
  value: undefined,
};

export default Checkbox;
