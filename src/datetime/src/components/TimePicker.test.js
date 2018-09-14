import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker from './TimePicker';

describe('TimePicker', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('clicking should toggle menu', () => {
    const wrapper = shallow(<TimePicker />);
    expect(wrapper.dive().find('Menu').exists()).toBeFalsy();
    wrapper.dive().find('DropdownIndicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.dive().find('Menu').exists()).toBeTruthy();
  });

});
