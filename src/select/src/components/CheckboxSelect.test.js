import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CheckboxSelect, { props } from './CheckboxSelect';
import Checkbox from '../../../checkbox';
import { OPTIONS } from './constants';

describe('CheckboxSelect', () => {

  describe('snapshot', () => {

    test('render matches snapshot', () => {
      const tree = mount(<CheckboxSelect />);
      expect(toJson(tree)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    test('internal Select should have selectProps', () => {
      const wrapper = mount(<CheckboxSelect />);
      const selectProps = wrapper.find('Select').props();
      expect(selectProps.selectProps).toEqual(props.selectProps);
    });

    test('internal Select should receive preset props', () => {
      const wrapper = mount(<CheckboxSelect />);
      const selectProps = wrapper.find('Select').props();

      Object.keys(props).forEach((key) => {
        expect(selectProps[key]).toEqual(props[key]);
      });
    });

  });

  describe('data', () => {

    test('should show controlled value', () => {
      const wrapper = mount(
        <CheckboxSelect
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
      const wrapper = mount(<CheckboxSelect />);
      expect(wrapper.find('Menu').exists()).toBeFalsy();
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find('Menu').exists()).toBeTruthy();
    });

    test('menu should render Checkbox options', () => {
      const wrapper = mount(<CheckboxSelect options={OPTIONS} />);
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find(Checkbox)).toHaveLength(5);
    });

    test('selected Checkbox options should be checked', () => {
      const wrapper = mount(
        <CheckboxSelect
            options={OPTIONS}
            value={[OPTIONS[0]]} />
      );
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find('Checkbox[checked=true]')).toHaveLength(1);
    });

  });

});
