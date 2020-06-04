import React from 'react';

import toJson from 'enzyme-to-json';
import {
  faCheckCircle,
  faExclamationTriangle,
  faNarwhal,
  faTimesOctagon
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mount, shallow } from 'enzyme';

import Banner from './Banner';
import { Container } from './styled/StyledBannerComponents';

import {
  GREEN,
  NEUTRAL,
  RED,
  YELLOW,
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
        const wrapper = mount(<Banner mode="default" />);
        expect(wrapper.prop('mode')).toEqual('default');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', NEUTRAL.N100);
        expect(wrapper.find(Container)).toHaveStyleRule('color', NEUTRAL.N900);
      });

      test('should render success mode', () => {
        const wrapper = mount(<Banner mode="success" />);
        expect(wrapper.prop('mode')).toEqual('success');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', GREEN.G100);
        expect(wrapper.find(Container)).toHaveStyleRule('color', GREEN.G400);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faCheckCircle);
      });

      test('should render danger mode', () => {
        const wrapper = mount(<Banner mode="danger" />);
        expect(wrapper.prop('mode')).toEqual('danger');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', RED.R100);
        expect(wrapper.find(Container)).toHaveStyleRule('color', RED.R400);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faTimesOctagon);
      });

      test('should render warning mode', () => {
        const wrapper = mount(<Banner mode="warning" />);
        expect(wrapper.prop('mode')).toEqual('warning');
        expect(wrapper.find(Container)).toHaveStyleRule('background-color', YELLOW.Y100);
        expect(wrapper.find(Container)).toHaveStyleRule('color', YELLOW.Y400);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faExclamationTriangle);
      });

    });

    describe('icon', () => {

      test('should render FontAwesome IconDefinition', () => {
        const wrapper = shallow(<Banner icon={faNarwhal} />);
        expect(wrapper.find(FontAwesomeIcon).props().icon).toEqual(faNarwhal);
      });

      test('fontawesome icon definition should override mode icon', () => {
        const wrapper = mount(<Banner mode="warning" icon={faNarwhal} />);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faNarwhal);
      });

      test('should invoke icon render prop', () => {
        const iconMock = jest.fn();
        shallow(<Banner icon={iconMock} />);
        expect(iconMock).toHaveBeenCalledTimes(1);
      });

      test('should render custom icon', () => {
        const customIcon = () => <FontAwesomeIcon icon={faNarwhal} />;
        const wrapper = mount(<Banner icon={customIcon} />);
        expect(wrapper.find(FontAwesomeIcon).prop('icon')).toEqual(faNarwhal);
      });

      test('custom icon should override mode icon', () => {
        const customIcon = () => <FontAwesomeIcon icon={faNarwhal} />;
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

    describe('sticky', () => {
      test('should apply sticky position', () => {
        const wrapper = mount(<Banner sticky />);
        expect(wrapper.find(Container)).toHaveStyleRule('position', 'sticky');
        expect(wrapper.find(Container)).toHaveStyleRule('top', '0');
        expect(wrapper.find(Container)).toHaveStyleRule('z-index', '200');
      });
    });

  });

});
