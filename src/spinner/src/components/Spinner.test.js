import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
