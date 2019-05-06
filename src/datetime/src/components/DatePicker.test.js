import React from 'react';
import { mount } from 'enzyme';
import LatticeDatePicker, { props } from './DatePicker';

describe('DatePicker', () => {

  test('should render internal DatePicker', () => {
    const wrapper = mount(<LatticeDatePicker />);
    expect(wrapper.find('DatePicker').exists()).toBeTruthy();
  });

  test('internal DatePicker should have selectProps', () => {
    const wrapper = mount(<LatticeDatePicker />);
    const datePickerProps = wrapper.find('DatePicker').props();
    expect(datePickerProps.selectProps).toEqual(props.selectProps);
  });

});
