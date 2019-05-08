import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Search />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

});
