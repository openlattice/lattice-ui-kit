import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePicker, { props } from './DatePicker';

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<DatePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('should render internal DatePicker', () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper.find('DatePicker').exists()).toBeTruthy();
  });

  test('internal DatePicker should have selectProps', () => {
    const wrapper = mount(<DatePicker />);
    const datePickerProps = wrapper.find('DatePicker').props();
    expect(datePickerProps.selectProps).toEqual(props.selectProps);
  });

});
