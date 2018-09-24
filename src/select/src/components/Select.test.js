import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select, { props } from './Select';
import { OPTIONS } from './constants';

describe('Select', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<Select />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('internal Select should have selectProps', () => {
    const wrapper = mount(<Select />);
    const selectProps = wrapper.find('Select').props();
    expect(selectProps.selectProps).toEqual(props.selectProps);
  });

  test('clicking should toggle menu', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.find('Menu').exists()).toBeFalsy();
    wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

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
