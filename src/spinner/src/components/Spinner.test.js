import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('Spinner', () => {

  test('snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
