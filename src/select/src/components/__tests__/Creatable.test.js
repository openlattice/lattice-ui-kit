import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Creatable from '../Creatable';

describe('Creatable', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<Creatable />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<Creatable />);
    expect(wrapper.instance().attrs.classNamePrefix).toEqual('lattice-select');
  });

});
