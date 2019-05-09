import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

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
});
