// @flow
import { Component } from 'react';
import type { Node } from 'react';

import isFunction from 'lodash/isFunction';

import DropdownIndicator from './styled/DropdownIndicator';
import SelectOption from './SelectOption';
import ValueContainer from './styled/ValueContainer';

import type { ReactSelectEvent, ReactSelectOption, ReactSelectValue } from '../../types';

type Props = {
  dropdownIcon ? :Node;
  hideDropdownIcon ? :boolean;
  inputIcon ? :Node;
  isMulti :boolean;
  onChange :(value :any, event :ReactSelectEvent) => void;
  options :ReactSelectOption[] | any[];
  render :(onChange :Function, rawValues :any) => Node;
  useRawValues :boolean;
  value :any;
}

class SelectController extends Component<Props> {

  static defaultProps = {
    dropdownIcon: undefined,
    hideDropdownIcon: false,
    inputIcon: undefined,
  };

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

    const defaultComponents :Object = {
      Option: SelectOption,
      ValueContainer,
      DropdownIndicator
    };

    const components = { ...defaultComponents, ...props.components };

    return { ...props, components };
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
