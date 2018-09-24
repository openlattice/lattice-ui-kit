import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
<<<<<<< HEAD
import { DatePicker } from '@atlaskit/datetime-picker';
// import DatePicker from './DatePicker';
=======
import DatePicker, { props } from './DatePicker';
>>>>>>> feature/emotion-date-time

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(<DatePicker />);
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
