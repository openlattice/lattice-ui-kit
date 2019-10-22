import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimePicker from './TimePicker';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = shallow(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

});
