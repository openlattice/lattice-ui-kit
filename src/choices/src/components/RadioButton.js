import React from 'react';

import {
  RadioContainer,
  RadioInputContainer,
  RadioSelection,
} from './styled/ChoiceButtonStyles';

const RadioButton = ({
  id,
  name,
  label,
  value,
  checked,
  onChange,
  disabled,
  large
}) => (
  <RadioContainer htmlFor={id}>
    <RadioInputContainer
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled} />
    <RadioSelection large={large}>{label}</RadioSelection>
  </RadioContainer>
);

// RadioButton.propTypes = {
//   name: PropTypes.string,
//   label: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.bool
//   ]).isRequired,
//   checked: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
//   large: PropTypes.bool
// };

RadioButton.defaultProps = {
  disabled: false,
  name: undefined,
  checked: false,
  large: false
};

export default RadioButton;
