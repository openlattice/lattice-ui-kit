import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactSelect from 'react-select';
import Select, { defaultProps } from './Select';
import { OPTIONS } from './constants';

describe('Select', () => {

  describe('snapshot', () => {

    test('render matches snapshot', () => {
      const tree = mount(<Select />);
      expect(toJson(tree)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    test('internal Select should receive preset props', () => {
      const wrapper = mount(<Select />);
      const selectProps = wrapper.find(ReactSelect).props();

      Object.keys(defaultProps).forEach((key) => {
        expect(selectProps[key]).toEqual(defaultProps[key]);
      });
    });

  });

  describe('data', () => {

    test('single > should show controlled value', () => {
      const wrapper = mount(
        <Select
            options={OPTIONS}
            value={OPTIONS[0]} />
      );
      const actualValue = wrapper.find('Control').get(0).props.getValue();
      const expectedValue = [OPTIONS[0]];
      expect(actualValue).toEqual(expectedValue);
    });

    test('multi > should show controlled value', () => {
      const wrapper = mount(
        <Select
            isMulti
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1]]} />
      );
      const actualValue = wrapper.find('Control').get(0).props.getValue();
      const expectedValue = [
        OPTIONS[0],
        OPTIONS[1]
      ];
      expect(actualValue).toEqual(expectedValue);
    });

  });

  describe('style', () => {

    test('clicking should toggle menu', () => {
      const wrapper = mount(<Select />);
      expect(wrapper.find('Menu').exists()).toBeFalsy();
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find('Menu').exists()).toBeTruthy();
    });

  });

});
