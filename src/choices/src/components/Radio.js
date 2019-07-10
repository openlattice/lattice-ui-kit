// @flow
import React, { Component } from 'react';
import {
  RadioIndicator,
  RadioInput,
  ChoiceLabel,
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

type State = {
  isChecked :boolean;
}

class Radio extends Component<Props, State> {

  static defaultProps = {
    checked: undefined,
    disabled: false,
    label: undefined,
    name: undefined,
    onChange: undefined,
    readOnly: undefined,
    value: undefined,
  };

  state = {
    isChecked: false
  };

  getIsChecked = () => {
    const { checked } = this.props;
    const { isChecked } = this.state;
    return checked !== undefined ? checked : isChecked;
  }

  handleChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
    const { disabled, onChange, readOnly } = this.props;
    e.persist();
    if (!(disabled || readOnly)) {
      this.setState({ isChecked: e.target.checked });
      if (onChange) {
        onChange(e);
      }
    }
  };

  render() {
    const {
      disabled,
      label,
      name,
      readOnly,
      value
    } = this.props;
    const isChecked = this.getIsChecked();
    return (
      <ChoiceLabel checked={isChecked}>
        <div>{label}</div>
        <RadioInput
            checked={isChecked}
            disabled={disabled}
            readOnly={readOnly}
            name={name}
            onChange={this.handleChange}
            value={value} />
        <RadioIndicator checked={isChecked} />
      </ChoiceLabel>
    );
  }
}

export default Radio;
