import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Creatable from './Creatable';
import { LATTICE_SELECT, OPTIONS } from './constants';

describe('Creatable', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<Creatable />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<Creatable />);
    expect(wrapper.instance().attrs.classNamePrefix).toEqual(LATTICE_SELECT);
  });

  it('clicking should toggle menu', () => {
    const wrapper = mount(<Creatable />);
    expect(wrapper.find('Menu').exists()).toBeFalsy();
    wrapper.find('div.lattice-select__dropdown-indicator').simulate('mouseDown', { button: 0 });
    expect(wrapper.find('Menu').exists()).toBeTruthy();
  });

  it('single > should show controlled value', () => {
    const wrapper = mount(
      <Creatable
          options={OPTIONS}
          value={OPTIONS[0]} />
    );
    const actualValue = wrapper.find('Control').get(0).props.getValue();
    const expectedValue = [OPTIONS[0]];
    expect(actualValue).toEqual(expectedValue);
  });

  it('multi > should show controlled value', () => {
    const wrapper = mount(
      <Creatable
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
