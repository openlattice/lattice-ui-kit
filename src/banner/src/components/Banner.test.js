import React from 'react';
import toJson from 'enzyme-to-json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
  faNarwhal,
  faTimesOctagon
} from '@fortawesome/pro-solid-svg-icons';
import { mount } from 'enzyme';

import Banner from './Banner';
import { Container } from './styled/StyledBannerComponents';
import {
  GREEN_1,
  NEUTRALS,
  RED_1,
  WHITE,
  YELLOW_1,
} from '../../../colors';


describe('Banner', () => {

  describe('snapshot', () => {
    test('should match snapshot when closed', () => {
      const wrapper = mount(<Banner />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should match snapshot when open', () => {
      const wrapper = mount(<Banner isOpen />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('props', () => {
    describe('mode', () => {
      test('should render default mode', () => {
        const wrapper = mount(<Banner />);
        expect(wrapper.prop('mode')).toEqual('default');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', NEUTRALS[0]);
        expect(wrapper.find(Container)).toHaveStyleRule('color', WHITE);
      });

      test('should render success mode', () => {
        const wrapper = mount(<Banner mode="success" />);
        expect(wrapper.prop('mode')).toEqual('success');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', GREEN_1);
        expect(wrapper.find(Container)).toHaveStyleRule('color', WHITE);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faCheckCircle);
      });

      test('should render danger mode', () => {
        const wrapper = mount(<Banner mode="danger" />);
        expect(wrapper.prop('mode')).toEqual('danger');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', RED_1);
        expect(wrapper.find(Container)).toHaveStyleRule('color', WHITE);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faTimesOctagon);
      });

      test('should render warning mode', () => {
        const wrapper = mount(<Banner mode="warning" />);
        expect(wrapper.prop('mode')).toEqual('warning');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', YELLOW_1);
        expect(wrapper.find(Container)).toHaveStyleRule('color', NEUTRALS[0]);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faExclamationTriangle);
      });

    });

    describe('icon', () => {
      test('should render custom icon', () => {
        const customIcon = <FontAwesomeIcon icon={faNarwhal} />;
        const wrapper = mount(<Banner icon={customIcon} />);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faNarwhal);
      });

      test('custom icon should override mode icon', () => {
        const customIcon = <FontAwesomeIcon icon={faNarwhal} />;
        const wrapper = mount(<Banner mode="warning" icon={customIcon} />);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faNarwhal);
      });
    });

    describe('isOpen', () => {
      test('should set max-height to 0 when falsy', () => {
        const wrapper = mount(<Banner />);
        expect(wrapper.find(Container)).toHaveStyleRule('max-height', '0');
      });

      test('should set max-height to default (60px) when truthy', () => {
        const wrapper = mount(<Banner isOpen />);
        expect(wrapper.find(Container)).toHaveStyleRule('max-height', '60px');
      });

    });

    describe('maxHeight', () => {
      test('should adjust max-height', () => {
        const wrapper = mount(<Banner maxHeight="100px" isOpen />);
        expect(wrapper.find(Container)).toHaveStyleRule('max-height', '100px');
      });

    });

  });

});
