import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CardHeader from './CardHeader';

import * as Colors from '../../../../colors';

const {
  GREEN,
  NEUTRAL,
  PURPLE,
  RED,
  YELLOW,
} = Colors;

describe('CardHeader', () => {

  describe('snapshots', () => {
    test('without children', () => {
      const wrapper = mount(<CardHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('with children', () => {
      const wrapper = mount(<CardHeader />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('render', () => {

    test('should render header', () => {
      const wrapper = mount(<CardHeader />);
      expect(wrapper.find('header')).toHaveLength(1);
    });

    describe('CardSegment inherited styles', () => {

      test('padding - sm', () => {
        const wrapper = mount(<CardHeader padding="sm" />);
        expect(wrapper).toHaveStyleRule('padding', '10px 30px 10px 30px');
      });

      test('padding - md', () => {
        const wrapper = mount(<CardHeader padding="md" />);
        expect(wrapper).toHaveStyleRule('padding', '20px 30px 20px 30px');
      });

      test('vertical', () => {
        const wrapper = mount(<CardHeader vertical />);
        expect(wrapper).toHaveStyleRule('flex-direction', 'column');
      });

    });

    describe('mode', () => {
      test('should render default mode', () => {
        const wrapper = mount(<CardHeader mode="default" />);
        expect(wrapper.prop('mode')).toEqual('default');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', NEUTRAL.N100);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', NEUTRAL.N900);
      });

      test('should render primary mode', () => {
        const wrapper = mount(<CardHeader mode="primary" />);
        expect(wrapper.prop('mode')).toEqual('primary');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', PURPLE.P300);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', 'white');
      });

      test('should render secondary mode', () => {
        const wrapper = mount(<CardHeader mode="secondary" />);
        expect(wrapper.prop('mode')).toEqual('secondary');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', PURPLE.P100);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', PURPLE.P400);
      });

      test('should render success mode', () => {
        const wrapper = mount(<CardHeader mode="success" />);
        expect(wrapper.prop('mode')).toEqual('success');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', GREEN.G100);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', GREEN.G400);
      });

      test('should render danger mode', () => {
        const wrapper = mount(<CardHeader mode="danger" />);
        expect(wrapper.prop('mode')).toEqual('danger');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', RED.R100);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', RED.R400);
      });

      test('should render warning mode', () => {
        const wrapper = mount(<CardHeader mode="warning" />);
        expect(wrapper.prop('mode')).toEqual('warning');
        expect(wrapper.find(CardHeader)).toHaveStyleRule('background-color', YELLOW.Y100);
        expect(wrapper.find(CardHeader)).toHaveStyleRule('color', YELLOW.Y500);
      });
    });

  });

  describe('props', () => {

    describe('onClick', () => {

      test('should have "cursor: inherit" for ":hover" by default', () => {
        const wrapper = mount(<CardHeader />);
        expect(wrapper).toHaveStyleRule('cursor', 'inherit', { modifier: ':hover' });
      });

      test('should have "cursor: pointer" for ":hover" when given onClick', () => {
        const wrapper = mount(<CardHeader onClick={() => { }} />);
        expect(wrapper).toHaveStyleRule('cursor', 'pointer', { modifier: ':hover' });
      });

    });

  });

});
