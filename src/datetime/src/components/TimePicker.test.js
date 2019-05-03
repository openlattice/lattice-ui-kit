import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker, { props } from './TimePicker';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('should render internal TimePicker', () => {
    const wrapper = mount(<TimePicker />);
    expect(wrapper.find('TimePicker').exists()).toBeTruthy();
  });

  test('internal DatePicker should have selectProps', () => {
    const wrapper = mount(<TimePicker />);
    const timePickerProps = wrapper.find('TimePicker').props();
    expect(timePickerProps.selectProps).toEqual(props.selectProps);
  });

});
