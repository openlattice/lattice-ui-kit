import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CardStack from './CardStack';

describe('CardStack', () => {

  describe('snapshots', () => {

    test('Without child', () => {
      const wrapper = mount(<CardStack />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with > 1 child', () => {
      const wrapper = mount((
        <CardStack>
          <div>child 1</div>
          <div>child 2</div>
        </CardStack>
      ));
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    test('should render div', () => {
      const wrapper = mount(<CardStack />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

  });

});
