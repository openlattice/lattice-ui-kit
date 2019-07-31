import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<SearchInput />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    test('should default to type="search"', () => {
      const wrapper = mount(<SearchInput />);
      expect(wrapper.find('input').prop('type')).toEqual('search');
    });

    test('should ignore type prop and default to type="search"', () => {
      const wrapper = mount(<SearchInput type="password" />);
      expect(wrapper.find('input').prop('type')).toEqual('search');
    });

    test('should pass props through', () => {
      const props = {
        autoComplete: 'on',
        disabled: true,
        form: 'test-form',
        max: 8,
        maxLength: 8,
        min: 1,
        name: 'test',
        pattern: '/.+/',
        placeholder: 'test placeholder',
        required: true,
      };
      const wrapper = mount(<SearchInput {...props} />);
      expect(wrapper.find('input').props()).toEqual(expect.objectContaining(props));
    });

  });

});
