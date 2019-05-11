import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Checkbox from './Checkbox';
import { CheckboxIndicator, CheckboxInput } from './styled';

import { PURPLES, NEUTRALS } from '../../../colors';

describe('Checkbox', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<Checkbox />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should pass through any props to the input', () => {
    const nativeProps = {
      disabled: true,
      name: 'test',
      required: true,
      form: 'test-form',
    };

    const wrapper = mount(<Checkbox {...nativeProps} />)
      .find('input')
      .props();
    expect(wrapper).toEqual(expect.objectContaining(nativeProps));
  });

  describe('styles', () => {

    test('focus should change indicator background', () => {
      const wrapper = mount(<Checkbox defaultChecked />);
      const checkboxInput = wrapper.find(CheckboxInput);

      expect(checkboxInput).toHaveStyleRule('background', NEUTRALS[1], {
        modifier: `:focus + ${CheckboxIndicator}`
      });

      expect(checkboxInput).toHaveStyleRule('background', PURPLES[1], {
        modifier: `:checked:focus + ${CheckboxIndicator}`
      });

    });

  });

});
