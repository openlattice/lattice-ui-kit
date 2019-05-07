import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from './Input';

describe('Input', () => {

  test('render matches snapshot', () => {
    const wrapper = shallow(<Input />);
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

  describe('render icon', () => {
  });

});
