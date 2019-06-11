// @flow
import React, { Component } from 'react';
import type { ReactSelectValue } from '../../types';

type Props = {
  options :any;
  useRawValues :boolean;
  render :(onChange :Function, rawValues :any) => Node;
  onChange :(value :any) => void;
  isMulti :boolean;
  value :any;
}

class SelectController extends Component<Props> {

  handleChangeRawValues = (selectedOption :ReactSelectValue) => {
    const { onChange } = this.props;
    const rawValue = this.getValue(selectedOption);
    onChange(rawValue);
  }

  getValue = (selectedOption :ReactSelectValue) :any => {
    const { isMulti } = this.props;
    if (isMulti && Array.isArray(selectedOption)) {
      return selectedOption.map(option => option.value);
    }
    if (selectedOption && !Array.isArray(selectedOption)) {
      return selectedOption.value;
    }
    return undefined;
  }

  getOptionsFromRawValue = () => {
    const { isMulti, options, value } = this.props;
    const optionsByValue = options.map((acc, option) => {
      acc[option.value] = option;
      return acc;
    }, {});
    if (isMulti && Array.isArray(value)) {
      return value.map(v => this.getOption(v, optionsByValue));
    }
    if (value !== undefined || value !== null) {
      return this.getOption(value, optionsByValue);
    }
    return undefined;
  }

  getOption = (value :any, optionsByValue :Object) => {
    if (optionsByValue[value]) {
      return optionsByValue[value];
    }
    return {
      label: `${value}`,
      value
    };
  }

  render() {
    const { useRawValues, render, ...rest } = this.props;

    // override onChange and value if useRawValues is truthy
    return (
      <>
        {
          useRawValues
            ? render({ ...rest, onChange: this.handleChangeRawValues, value: this.getOptionsFromRawValue() })
            : render({ ...rest })
        }
      </>
    );
  }
}

export default SelectController;
