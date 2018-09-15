import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker, { props } from './TimePicker';

describe('TimePicker', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('should render internal TimePicker', () => {
    const wrapper = mount(<TimePicker />);
    expect(wrapper.find('TimePicker').exists()).toBeTruthy();
  });

  it('internal DatePicker should have selectProps', () => {
    const wrapper = mount(<TimePicker />);
    const timePickerProps = wrapper.find('TimePicker').props();
    expect(timePickerProps.selectProps).toEqual(props.selectProps);
  });

});
