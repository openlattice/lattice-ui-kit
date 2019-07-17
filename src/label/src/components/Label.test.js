import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import { NEUTRALS } from '../../../colors';

import Label from './Label';

describe('Label', () => {
  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Label />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('should render label', () => {
      const wrapper = mount(<Label />);
      expect(wrapper.find('label')).toHaveLength(1);
    });

  });

  describe('styles', () => {
    test('bold prop should apply font-weight: 600', () => {
      const wrapper = mount(<Label bold />);
      expect(wrapper.find(Label)).toHaveStyleRule('font-weight', '600');
    });

    test('subtle prop should apply styles', () => {
      const wrapper = mount(<Label subtle />);
      expect(wrapper.find(Label)).toHaveStyleRule('font-weight', '600');
      expect(wrapper.find(Label)).toHaveStyleRule('color', NEUTRALS[1]);
      expect(wrapper.find(Label)).toHaveStyleRule('font-size', '11px');
      expect(wrapper.find(Label)).toHaveStyleRule('text-transform', 'uppercase');
    });

    test('required prop should apply :after content', () => {
      const wrapper = mount(<Label required>First Name</Label>);
      expect(wrapper.find(Label)).toHaveStyleRule('content', "'*'", {
        modifier: ':after'
      });
    });
  });
});
