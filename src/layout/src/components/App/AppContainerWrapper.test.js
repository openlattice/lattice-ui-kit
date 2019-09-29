import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import AppContainerWrapper from './AppContainerWrapper';
import { APP_CONTAINER_MIN_WIDTH } from '../../../../style/Sizes';

describe('AppContainerWrapper', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<AppContainerWrapper />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render a div element', () => {
      const wrapper = mount(<AppContainerWrapper />);
      expect(wrapper.find('div')).toHaveLength(1);
    });

  });

  describe('style', () => {

    test('should have "flex-direction: column"', () => {
      const wrapper = mount(<AppContainerWrapper />);
      expect(wrapper.find('div')).toHaveStyleRule('flex-direction', 'column');
    });

    test('should have "height: 100%"', () => {
      const wrapper = mount(<AppContainerWrapper />);
      expect(wrapper.find('div')).toHaveStyleRule('height', '100%');
    });

    test('should have "min-width" equal to global constant', () => {
      const wrapper = mount(<AppContainerWrapper />);
      expect(wrapper.find('div')).toHaveStyleRule('min-width', `${APP_CONTAINER_MIN_WIDTH}px`);
    });

  });

});
