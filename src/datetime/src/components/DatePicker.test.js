import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { DatePicker } from '@atlaskit/datetime-picker';
// import DatePicker from './DatePicker';

describe('DatePicker', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<DatePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('clicking should toggle menu', () => {
    const wrapper = mount(<DatePicker />);
    expect(wrapper.find('Menu').exists()).toBeFalsy();
    wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

});
