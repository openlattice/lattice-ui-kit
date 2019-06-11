import React from 'react';
import ReactSelect from 'react-select';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectController from './SelectController';
import { OPTIONS } from './constants';

const mockComponent = (selectProps => <ReactSelect {...selectProps} />);

describe('Select', () => {

  describe('snapshot', () => {

    test('render matches snapshot', () => {
      const wrapper = shallow(<SelectController render={mockComponent} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('getOptionsFromRawValue', () => {
    test('should return undefined if uncontrolled', () => {
      const wrapper = shallow(
        <SelectController
            options={OPTIONS}
            render={mockComponent}
            useRawValues />
      );

      const instance = wrapper.instance();
      const { getOptionsFromRawValue } = instance;

      const computedOptions = getOptionsFromRawValue();
      expect(computedOptions).toBeUndefined();
    });

    test('should return option from value', () => {
      const wrapper = shallow(
        <SelectController
            options={OPTIONS}
            render={mockComponent}
            useRawValues
            value="zero" />
      );

      const instance = wrapper.instance();
      const { getOptionsFromRawValue } = instance;

      const computedOptions = getOptionsFromRawValue();
      expect(computedOptions).toEqual(OPTIONS[0]);
    });

    test('should return options from values', () => {
      const wrapper = shallow(
        <SelectController
            isMulti
            options={OPTIONS}
            render={mockComponent}
            useRawValues
            value={['zero', 'one']} />
      );

      const instance = wrapper.instance();
      const { getOptionsFromRawValue } = instance;

      const computedOptions = getOptionsFromRawValue();
      expect(computedOptions).toEqual(OPTIONS.slice(0, 2));
    });
  });

  describe('useRawValues', () => {

    test('should not pass value if uncontrolled', () => {
      const wrapper = mount(
        <SelectController
            options={OPTIONS}
            render={mockComponent}
            useRawValues />
      );

      const reactSelectProps = wrapper.find(ReactSelect).props();
      expect(reactSelectProps).not.toHaveProperty('value');
    });

    test('useRawValues should transform raw values into options', () => {
      const wrapper = mount(
        <SelectController
            options={OPTIONS}
            render={mockComponent}
            useRawValues
            value="zero" />
      );

      const reactSelectValue = wrapper.find(ReactSelect).props().value;
      expect(reactSelectValue).toEqual(OPTIONS[0]);
    });

    test('isMulti > useRawValues should transform array of values into array of options', () => {
      const wrapper = mount(
        <SelectController
            isMulti
            options={OPTIONS}
            render={mockComponent}
            useRawValues
            value={['zero', 'one']} />
      );

      const reactSelectValue = wrapper.find(ReactSelect).props().value;
      expect(reactSelectValue).toEqual(OPTIONS.slice(0, 2));
    });

    test('do not pass useRawValues through render', () => {
      const wrapper = mount(
        <SelectController
            options={OPTIONS}
            render={mockComponent}
            useRawValues
            value="zero" />
      );
      const reactSelectProps = wrapper.find(ReactSelect).props();
      expect(reactSelectProps.useRawValues).toBeUndefined();
    });

    test('useRawValues should override onChange', () => {
      const wrapper = mount(<SelectController useRawValues render={mockComponent} />);
      const reactSelectProps = wrapper.find(ReactSelect).props();
      const { handleChangeRawValues } = wrapper.instance();
      expect(reactSelectProps.onChange).toEqual(handleChangeRawValues);
    });

  });

  describe('handleChangeRawValues', () => {

    test('handleChangeRawValues should transform option to value', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <SelectController
            useRawValues
            render={mockComponent}
            onChange={mockOnChange} />
      );

      const instance = wrapper.instance();
      const getValueSpy = jest.spyOn(instance, 'getValue');
      instance.forceUpdate();

      const { handleChangeRawValues } = instance;
      const mockEvent = { action: 'select-option' };
      handleChangeRawValues(OPTIONS[0], mockEvent);

      expect(getValueSpy).toHaveBeenCalledWith(OPTIONS[0]);
      expect(mockOnChange).toHaveBeenCalledWith(OPTIONS[0].value, mockEvent);
    });

    test('handleChangeRawValues should transform options to values', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <SelectController
            isMulti
            onChange={mockOnChange}
            render={mockComponent}
            useRawValues />
      );

      const instance = wrapper.instance();
      const getValueSpy = jest.spyOn(instance, 'getValue');
      instance.forceUpdate();

      const { handleChangeRawValues } = instance;
      const mockEvent = { action: 'select-option' };

      const selectedOptions = OPTIONS.slice(0, 2);
      handleChangeRawValues(selectedOptions, mockEvent);

      const expectedValue = selectedOptions.map(option => option.value);

      expect(getValueSpy).toHaveBeenCalledWith(selectedOptions);
      expect(mockOnChange).toHaveBeenCalledWith(expectedValue, mockEvent);
    });

    test('handleChangeRawValues should return undefined for empty selection', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <SelectController
            isMulti
            onChange={mockOnChange}
            render={mockComponent}
            useRawValues />
      );

      const instance = wrapper.instance();
      const getValueSpy = jest.spyOn(instance, 'getValue');
      instance.forceUpdate();

      const { handleChangeRawValues } = instance;
      const mockEvent = { action: 'clearValue' };

      const selectedOptions = undefined;
      handleChangeRawValues(selectedOptions, mockEvent);

      expect(getValueSpy).toHaveBeenCalledWith(selectedOptions);
      expect(mockOnChange).toHaveBeenCalledWith(undefined, mockEvent);
    });
  });

  describe('getOption', () => {
    test('getOption should return value from optionsByValue', () => {
      const wrapper = shallow(
        <SelectController
            render={mockComponent}
            useRawValues />
      );

      const instance = wrapper.instance();
      const { getOption } = instance;

      const newOption = getOption('zero', { zero: OPTIONS[0] });
      expect(newOption).toEqual(OPTIONS[0]);
    });

    test('getOption should return new option object if not found', () => {
      const wrapper = shallow(
        <SelectController
            render={mockComponent}
            useRawValues />
      );

      const instance = wrapper.instance();
      const { getOption } = instance;

      const newOption = getOption('DNE', {});
      expect(newOption).toEqual({ label: 'DNE', value: 'DNE' });
    });
  });

});
