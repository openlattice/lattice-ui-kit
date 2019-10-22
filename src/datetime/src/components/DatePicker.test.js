import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePicker from './DatePicker';

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    // Use shallow render to avoid the current date from imposing on snapshot
    const tree = shallow(<DatePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
