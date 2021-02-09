import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Tag from './Tag';

import * as Colors from '../../../colors';

const {
  BLUE,
  GREEN,
  NEUTRAL,
  PURPLE,
  MAGENTA,
  ORANGE,
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
      expect(wrapper.find(Tag)).toHaveStyleRule('color', MAGENTA.M400);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', MAGENTA.M00);
    });

    test('info', () => {
      const wrapper = mount(<Tag mode="info">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', BLUE.B400);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', BLUE.B00);
    });

    test('neutral', () => {
      const wrapper = mount(<Tag mode="neutral">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', NEUTRAL.N00);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', NEUTRAL.N700);
    });

    test('primary', () => {
      const wrapper = mount(<Tag mode="primary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', PURPLE.P00);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLE.P300);
    });

    test('secondary', () => {
      const wrapper = mount(<Tag mode="secondary">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', PURPLE.P400);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', PURPLE.P00);
    });

    test('success', () => {
      const wrapper = mount(<Tag mode="success">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', GREEN.G400);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', GREEN.G00);
    });

    test('warning', () => {
      const wrapper = mount(<Tag mode="warning">tag</Tag>);
      expect(wrapper.find(Tag)).toHaveStyleRule('color', ORANGE.O400);
      expect(wrapper.find(Tag)).toHaveStyleRule('background-color', ORANGE.O00);
    });

  });
});
