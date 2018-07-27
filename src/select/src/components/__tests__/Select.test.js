import React from 'react'; // eslint-disable-line no-unused-vars
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Select from '../Select';

describe('Select', () => {

  it('render matches snapshot', () => {
    const tree = shallow(<Select />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it('attrs classNamePrefix is set to "lattice-select"', () => {
    const wrapper = mount(<Select />);
    expect(wrapper.instance().attrs.classNamePrefix).toEqual('lattice-select');
  });

});
