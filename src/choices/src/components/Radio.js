// @flow
import React from 'react';

import {
  ChoiceInnerWrapper,
  ChoiceLabel,
  ChoiceWrapper,
  RadioIndicator,
  RadioInput
} from './styled';

type Props = {
  checked ? :boolean;
  disabled ? :boolean;
  id ? :string;
  label ? :string;
  mode ? :string;
  name ? :string;
  onBlur ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  onFocus ? :(event :SyntheticInputEvent<HTMLInputElement>) => void;
  readOnly ? :boolean;
  value ? :any;
};

/* eslint-disable react/jsx-props-no-spreading */
const Radio = ({
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
        <RadioInput
            id={id}
            readOnly={readOnly}
            disabled={disabled || readOnly}
            // $FlowFixMe
            {...rest} />
        <RadioIndicator mode={mode}>
          {
            mode === 'button' && label
          }
        </RadioIndicator>
      </ChoiceInnerWrapper>
    </ChoiceWrapper>
    {
      mode !== 'button' && label
    }
  </ChoiceLabel>
);
/* eslint-enable */

Radio.defaultProps = {
  checked: undefined,
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

export default Radio;
