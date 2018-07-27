import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Select from '../Select';

const OPTIONS = [
  { label: '0', value: 'zero' },
  { label: '1', value: 'one' },
  { label: '2', value: 'two' },
  { label: '3', value: 'three' },
  { label: '4', value: 'four' },
];

describe('Select', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<Select />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.instance().attrs.classNamePrefix).toEqual('lattice-select');
  });

  it('clicking should toggle menu', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.find('Menu').exists()).toBeFalsy();
    wrapper.find('div.lattice-select__dropdown-indicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

  it('single > should show controlled value', () => {
    const wrapper = mount(
      <Select
          options={OPTIONS}
          value={OPTIONS[0]} />
    );
    const actualValue = wrapper.find('Control').get(0).props.getValue();
    const expectedValue = [OPTIONS[0]];
    expect(actualValue).toEqual(expectedValue);
  });

  it('multi > should show controlled value', () => {
    const wrapper = mount(
      <Select
          isMulti
          options={OPTIONS}
          value={[OPTIONS[0], OPTIONS[1]]} />
    );
    const actualValue = wrapper.find('Control').get(0).props.getValue();
    const expectedValue = [
      OPTIONS[0],
      OPTIONS[1]
    ];
    expect(actualValue).toEqual(expectedValue);
  });

});
