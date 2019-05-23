import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LatticeDatePicker, { props } from './DatePicker';

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    // Use shallow render to avoid the current date from imposing on snapshot
    const tree = shallow(<LatticeDatePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

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
