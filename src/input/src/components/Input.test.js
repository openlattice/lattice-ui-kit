import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from './Input';
import { RED_1 } from '../../../colors';

describe('Input', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<Input />);
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

      const wrapper = mount(<Input {...nativeProps} />)
        .find('input')
        .props();
      expect(wrapper).toEqual(expect.objectContaining(nativeProps));
    });

  });

  describe('Computed styles', () => {

    test('invalid', () => {
      const wrapper = mount(<Input invalid />);
      expect(wrapper).toHaveStyleRule('border', `1px solid ${RED_1}`);
    });

  });

});
