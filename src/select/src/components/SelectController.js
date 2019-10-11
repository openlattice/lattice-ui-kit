// @flow
import React, { Component } from 'react';
import { createFilter } from 'react-select';
import isFunction from 'lodash/isFunction';
import type { Node, ComponentType } from 'react';
import type { IconDefinition } from '@fortawesome/react-fontawesome';

import DropdownIndicator from './styled/DropdownIndicator';
import type { ReactSelectEvent, ReactSelectOption, ReactSelectValue } from '../../types';

type Props = {
  icon ? :IconDefinition | ComponentType<any>;
  isMulti :boolean;
  onChange :(value :any, event :ReactSelectEvent) => void;
  options :ReactSelectOption[] | any[];
  render :(onChange :Function, rawValues :any) => Node;
  useRawValues :boolean;
  value :any;
}

class SelectController extends Component<Props> {
  static defaultProps = {
    icon: undefined
  }

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
      return selectedOption.map((option) => option.value);
    }
    if (selectedOption && !Array.isArray(selectedOption)) {
      return selectedOption.value;
    }
    return undefined;
  }

  getOptionsFromRawValue = () :ReactSelectOption[] | ReactSelectOption | void => {
    const { isMulti, options, value } = this.props;
    const optionsByValue = options.reduce((acc, option) => {
      acc[option.value] = option;
      return acc;
    }, {});
    if (isMulti && Array.isArray(value)) {
      return value.map((v) => this.getOption(v, optionsByValue));
    }
    if (value !== undefined && value !== null) {
      return this.getOption(value, optionsByValue);
    }

    return undefined;
  }

  getOption = (value :any, optionsByValue :Object) :ReactSelectOption => {
    if (optionsByValue[value]) {
      return optionsByValue[value];
    }
    return {
      label: `${value}`,
      value
    };
  }

  composeProps = (props :Object) :Object => {
    const { icon } = this.props;

    if (icon) {
      const components = {
        DropdownIndicator,
      };

      return { ...props, components };
    }

    return props;
  }

  renderWithDataOverrides = () => {
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

    const composedProps = this.composeProps(overrideProps);
    return render(composedProps);
  }

  render() {
    const { useRawValues, render, ...rest } = this.props;
    const composedProps = this.composeProps({ ...rest });
    return (
      <>
        {
          useRawValues
            ? this.renderWithDataOverrides()
            : render(composedProps)
        }
      </>
    );
  }
}

export default SelectController;
