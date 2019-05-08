import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Search from './Search';
import { Card } from '../../../../layout';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Search />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    test('render Card', () => {
      const wrapper = mount(<Search />);
      expect(wrapper.find(Card)).toHaveLength(1);
    });

  });

});
