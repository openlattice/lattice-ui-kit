import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { StyledSelect, StyledCreatable } from '../Select';

describe('StyledSelect', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<StyledSelect />)
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<StyledSelect />);
    expect(wrapper.instance().attrs.classNamePrefix).toEqual('lattice-select');
  });

});

describe('StyledCreatable', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<StyledCreatable />)
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<StyledCreatable />)
    expect(wrapper.instance().attrs.classNamePrefix).toEqual('lattice-select');
  });
  
});
