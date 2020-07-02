import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Tag from './Tag';

import * as Colors from '../../../colors';

const {
  GREEN,
  NEUTRAL,
  PURPLE,
  RED,
  YELLOW,
} = Colors;

describe('Tag', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Tag>tag</Tag>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('modes', () => {

    test('default', () => {
      const wrapper = mount(<Tag>tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', NEUTRAL.N700);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', NEUTRAL.N100);
    });

    test('danger', () => {
      const wrapper = mount(<Tag mode="danger">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', 'white');
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', RED.R300);
    });

    test('neutral', () => {
      const wrapper = mount(<Tag mode="neutral">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', 'white');
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', NEUTRAL.N700);
    });

    test('primary', () => {
      const wrapper = mount(<Tag mode="primary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', 'white');
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLE.P300);
    });

    test('secondary', () => {
      const wrapper = mount(<Tag mode="secondary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', PURPLE.P300);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLE.P100);
    });

    test('success', () => {
      const wrapper = mount(<Tag mode="success">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', 'white');
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', GREEN.G300);
    });

    test('warning', () => {
      const wrapper = mount(<Tag mode="warning">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', NEUTRAL.N700);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', YELLOW.Y300);
    });

  });
});
