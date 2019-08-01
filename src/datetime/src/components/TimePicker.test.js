import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker, { defaultProps } from './TimePicker';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('should render internal TimePicker', () => {
    const wrapper = mount(<TimePicker />);
    expect(wrapper.find('TimePicker').exists()).toBeTruthy();
  });

  test('internal TimePicker should have selectProps', () => {
    const wrapper = mount(<TimePicker />);
    const timePickerProps = wrapper.find('TimePicker').props();
    expect(timePickerProps.selectProps).toEqual(defaultProps.selectProps);
  });

});
