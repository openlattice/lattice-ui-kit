import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Tag from './Tag';

import * as Colors from '../../../colors';

const {
  GREEN_1,
  NEUTRALS,
  PURPLES, PURPLE,
  RED_1,
  WHITE,
  YELLOW_1,
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
      expect(wrapper.find(Tag)).toHaveStyleRule('color', NEUTRALS[0]);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', NEUTRALS[6]);
    });

    test('danger', () => {
      const wrapper = mount(<Tag mode="danger">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', RED_1);
    });

    test('neutral', () => {
      const wrapper = mount(<Tag mode="neutral">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', NEUTRALS[0]);
    });

    test('primary', () => {
      const wrapper = mount(<Tag mode="primary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLES[2]);
    });

    test('secondary', () => {
      const wrapper = mount(<Tag mode="secondary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', PURPLE.P300);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLE.P100);
    });

    test('success', () => {
      const wrapper = mount(<Tag mode="success">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', WHITE);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', GREEN_1);
    });

    test('warning', () => {
      const wrapper = mount(<Tag mode="warning">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', NEUTRALS[0]);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', YELLOW_1);
    });

  });
});
