import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker, { props } from './TimePicker';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

<<<<<<< HEAD
<<<<<<< HEAD
  it('clicking should toggle menu', () => {
    const wrapper = shallow(<TimePicker />);
    expect(wrapper.dive().find('Menu').exists()).toBeFalsy();
    wrapper.dive().find('DropdownIndicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.dive().find('Menu').exists()).toBeTruthy();
=======
  it('should render internal TimePicker', () => {
=======
  test('should render internal TimePicker', () => {
>>>>>>> feature/emotion-date-time
    const wrapper = mount(<TimePicker />);
    expect(wrapper.find('TimePicker').exists()).toBeTruthy();
  });

  test('internal DatePicker should have selectProps', () => {
    const wrapper = mount(<TimePicker />);
    const timePickerProps = wrapper.find('TimePicker').props();
    expect(timePickerProps.selectProps).toEqual(props.selectProps);
>>>>>>> feature/emotion-date-time
  });

});
