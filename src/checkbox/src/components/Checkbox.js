// @flow
import React, { Component } from 'react';
import { CheckboxIndicator, CheckboxInput, CheckboxLabel } from './styled';

type Props = {
  disabled ? :boolean;
  onChange ? :(event :SyntheticInputEvent<HTMLInputElement>) => mixed;
  value ? :any;
  label ? :string;
  name ? :string;
  checked ? :boolean;
  defaultChecked ? :boolean;
  readOnly ? :boolean;
}

type State = {
  isChecked :boolean;
};

class Checkbox extends Component<Props, State> {

  static defaultProps = {
    checked: undefined,
    defaultChecked: false,
    disabled: false,
    label: undefined,
    name: undefined,
    onChange: undefined,
    readOnly: undefined,
    value: undefined,
  };

  constructor(props :Props) {
    super(props);

    const { checked, defaultChecked } = props;
    this.state = {
      isChecked: (checked !== undefined)
        ? checked
        // $FlowFixMe optional prop provided by defaultProps
        : defaultChecked,
    };
  }

  // Use prop 'checked' over state 'isChecked' if available
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
      checked,
      defaultChecked,
      label,
      onChange,
      readOnly,
      ...rest
    } = this.props;
    const isChecked = this.getIsChecked();
    return (
      <CheckboxLabel readOnly={readOnly}>
        {label}
        <CheckboxInput
            checked={isChecked}
            onChange={this.handleChange}
            {...rest} />
        <CheckboxIndicator checked={isChecked} />
      </CheckboxLabel>
    );
  }
}

export default Checkbox;
