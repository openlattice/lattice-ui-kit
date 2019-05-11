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
    value: undefined,
  };

  constructor(props :Props) {
    super(props);

    const { checked, defaultChecked } = props;
    this.state = {
      isChecked: (checked !== undefined)
        ? checked
        : defaultChecked,
    };
  }

  onChange = (e :SyntheticInputEvent<HTMLInputElement>) => {
    const { disabled, onChange } = this.props;
    e.persist();
    if (!disabled) {
      if (e.currentTarget.checked !== undefined) {
        this.setState({ isChecked: e.currentTarget.checked });
      }
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
      ...rest
    } = this.props;
    const { isChecked } = this.state;
    return (
      <CheckboxLabel>
        {label}
        <CheckboxInput
            checked={isChecked}
            onChange={this.onChange}
            {...rest} />
        <CheckboxIndicator checked={isChecked} />
      </CheckboxLabel>
    );
  }
}

export default Checkbox;
