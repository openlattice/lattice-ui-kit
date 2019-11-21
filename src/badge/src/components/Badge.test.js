import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import * as Colors from '../../../colors';
import Badge from './Badge';

const { NEUTRALS, PURPLES, WHITE } = Colors;

describe('Badge', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Badge count="10" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('text should show max and not count', () => {
      const wrapper = mount(<Badge count="100" max="99" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('text should show count and not max', () => {
      const wrapper = mount(<Badge count="82" max="99" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('default max value should be displayed', () => {
      const wrapper = mount(<Badge count="8000" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('modes', () => {

    test('default', () => {
      const wrapper = mount(<Badge count="10" />);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', NEUTRALS[0]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', NEUTRALS[6]);
    });

    test('primary', () => {
      const wrapper = mount(<Badge mode="primary" count="10" />);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', PURPLES[2]);
    });

    test('secondary', () => {
      const wrapper = mount(<Badge mode="secondary" count="10" />);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', PURPLES[1]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', PURPLES[5]);
    });

  });
});
