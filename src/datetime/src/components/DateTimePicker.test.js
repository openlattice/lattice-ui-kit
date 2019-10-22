import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DateTimePicker from './DateTimePicker';

describe('DateTimePicker', () => {

  test('render matches snapshot', () => {
    // Use shallow render to avoid the current date from imposing on snapshot
    const tree = shallow(<DateTimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
