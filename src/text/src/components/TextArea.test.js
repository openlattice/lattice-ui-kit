import React from 'react';

import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import TextArea from './TextArea';

import { RED } from '../../../colors';

describe('TextArea', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<TextArea />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('native input props', () => {
    test('should pass through any props to the input', () => {
      const nativeProps = {
        type: 'text',
        disabled: true,
        name: 'test',
        placeholder: 'test placeholder',
        maxLength: 8,
        min: 1,
        max: 8,
        required: true,
        autoComplete: 'on',
        form: 'test-form',
        pattern: '/.+/',
      };

      // eslint-disable-next-line react/jsx-props-no-spreading
      const wrapper = mount(<TextArea {...nativeProps} />)
        .find('textarea')
        .props();
      expect(wrapper).toEqual(expect.objectContaining(nativeProps));
    });

  });

  describe('Computed styles', () => {

    test('invalid', () => {
      const wrapper = mount(<TextArea invalid />);
      expect(wrapper).toHaveStyleRule('border', `1px solid ${RED.R300}`);
    });

  });

});
