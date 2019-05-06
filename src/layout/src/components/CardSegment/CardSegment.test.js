import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CardSegment from './CardSegment';


describe('CardSegment', () => {

  describe('snapshots', () => {

    test('Without Children', () => {
      const wrapper = mount(<CardSegment />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    test('should render div', () => {
      const wrapper = mount(<CardSegment />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

  });

});
