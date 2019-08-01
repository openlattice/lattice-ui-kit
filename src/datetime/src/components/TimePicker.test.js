import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LatticeTimePicker, { defaultProps } from './TimePicker';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<LatticeTimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('should render internal TimePicker', () => {
    const wrapper = mount(<LatticeTimePicker />);
    expect(wrapper.find('TimePicker').exists()).toBeTruthy();
  });

  test('internal TimePicker should have selectProps', () => {
    const wrapper = mount(<LatticeTimePicker />);
    const timePickerProps = wrapper.find('TimePicker').props();
    expect(timePickerProps.selectProps).toEqual(defaultProps.selectProps);
  });

});
