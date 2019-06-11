// @flow
import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import type { Node } from 'react';
import type { ReactSelectValue, ReactSelectEvent } from '../../types';

type Props = {
  options :any;
  useRawValues :boolean;
  render :(onChange :Function, rawValues :any) => Node;
  onChange :(value :any, event :ReactSelectEvent) => void;
  isMulti :boolean;
  value :any;
}

class SelectController extends Component<Props> {

  handleChangeRawValues = (selectedOption :ReactSelectValue, event :ReactSelectEvent) => {
    const { onChange } = this.props;
    const rawValue = this.getValue(selectedOption);
    if (isFunction(onChange)) {
      onChange(rawValue, event);
    }
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
    if (Array.isArray(options)) {
      const optionsByValue = options.reduce((acc, option) => {
        acc[option.value] = option;
        return acc;
      }, {});
      if (isMulti && Array.isArray(value)) {
        return value.map(v => this.getOption(v, optionsByValue));
      }
      if (value !== undefined && value !== null) {
        return this.getOption(value, optionsByValue);
      }
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

  renderWithOverrides = () => {
    const {
      onChange,
      render,
      useRawValues,
      value,
      ...rest
    } = this.props;

    const overrideProps :Object = {
      ...rest, onChange: this.handleChangeRawValues
    };

    if (value !== undefined && value !== null) {
      overrideProps.value = this.getOptionsFromRawValue();
    }

    return render(overrideProps);
  }

  render() {
    const { useRawValues, render, ...rest } = this.props;
    return (
      <>
        {
          useRawValues
            ? this.renderWithOverrides()
            : render({ ...rest })
        }
      </>
    );
  }
}

export default SelectController;
