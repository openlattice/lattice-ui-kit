import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import * as Colors from '../../../colors';
import Badge from './Badge';

const {
  GREENS,
  NEUTRALS,
  PURPLES,
  REDS,
  WHITE,
} = Colors;


describe('Badge', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Badge>tag</Badge>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('modes', () => {

    test('default', () => {
      const wrapper = mount(<Badge>tag</Badge>);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', NEUTRALS[0]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', NEUTRALS[6]);
    });

    test('primary', () => {
      const wrapper = mount(<Badge mode="primary">tag</Badge>);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', PURPLES[2]);
    });

    test('secondary', () => {
      const wrapper = mount(<Badge mode="secondary">tag</Badge>);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', PURPLES[1]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', PURPLES[5]);
    });

    test('added', () => {
      const wrapper = mount(<Badge mode="added">tag</Badge>);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', GREENS[3]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', GREENS[0]);
    });

    test('removed', () => {
      const wrapper = mount(<Badge mode="removed">tag</Badge>);
      expect(wrapper.find(Badge)).toHaveStyleRule('color', REDS[3]);
      expect(wrapper.find(Badge)).toHaveStyleRule('background-color', REDS[0]);
    });

  });
});
