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

  test('indicator styles should change appropriately', () => {
    const wrapper = mount(<Checkbox defaultChecked />);
    const checkboxInput = wrapper.find(CheckboxInput);

    // focus/hover
    expect(checkboxInput).toHaveStyleRule('background', NEUTRALS[1], {
      modifier: `:hover + ${CheckboxIndicator}`
    });
    expect(checkboxInput).toHaveStyleRule('background', NEUTRALS[1], {
      modifier: `:focus + ${CheckboxIndicator}`
    });

    // checked
    expect(checkboxInput).toHaveStyleRule('background', PURPLES[2], {
      modifier: `:checked + ${CheckboxIndicator}`
    });

    // checked + focus/hover
    expect(checkboxInput).toHaveStyleRule('background', PURPLES[1], {
      modifier: `:checked:focus + ${CheckboxIndicator}`
    });
    expect(checkboxInput).toHaveStyleRule('background', PURPLES[1], {
      modifier: `:checked:hover + ${CheckboxIndicator}`
    });

    // disabled styles
    expect(checkboxInput).toHaveStyleRule('background', PURPLES[6], {
      modifier: `:disabled + ${CheckboxIndicator}`
    });
    expect(checkboxInput).toHaveStyleRule('background', NEUTRALS[2], {
      modifier: `:checked:disabled + ${CheckboxIndicator}`
    });

  });

  describe('Uncontrolled <Checkbox />', () => {

    test('should be unchecked by default', () => {
      const wrapper = mount(<Checkbox />);
      expect(wrapper.find('input').prop('checked')).toEqual(false);
    });

    test('should not use state isChecked when prop checked is true', () => {
      const wrapper = mount(<Checkbox checked={false} />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { checked: true } });
      expect(wrapper.find('input').prop('checked')).toEqual(false);
    });

    test('should call handleChange once', () => {
      const wrapper = mount(<Checkbox />);
      const instance = wrapper.instance();
      const handleChangeSpy = jest.spyOn(instance, 'handleChange');

      instance.forceUpdate();
      wrapper.find('input').simulate('change');

      expect(handleChangeSpy).toHaveBeenCalledTimes(1);
    });

    test('should toggle isChecked', () => {
      const wrapper = mount(<Checkbox />);

      wrapper.find(CheckboxInput).simulate('change', { target: { checked: true } });
      expect(wrapper.state().isChecked).toEqual(true);
      expect(wrapper.find('input').prop('checked')).toEqual(true);

      wrapper.find(CheckboxInput).simulate('change', { target: { checked: false } });
      expect(wrapper.state().isChecked).toEqual(false);
      expect(wrapper.find('input').prop('checked')).toEqual(false);
    });

    test('should not toggle isChecked when disabled', () => {
      const wrapper = mount(<Checkbox disabled />);
      wrapper.find(CheckboxInput).simulate('change', { target: { checked: true } });
      expect(wrapper.state().isChecked).toEqual(false);
    });
  });

  describe('Stateless <Checkbox checked />', () => {
    test('should not use state isChecked when prop checked is false', () => {
      const wrapper = mount(<Checkbox checked={false} />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { checked: true } });
      expect(wrapper.find('input').prop('checked')).toEqual(false);
    });

    test('should not use state isChecked when prop checked is true', () => {
      const wrapper = mount(<Checkbox checked={false} />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { checked: true } });
      expect(wrapper.find('input').prop('checked')).toEqual(false);
    });
  });

  describe('Controlled <Checkbox checked onChange={...} />', () => {

    test('should call onChange once', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(<Checkbox checked={false} onChange={mockOnChange} />);

      wrapper.find(CheckboxInput).simulate('change', { target: { checked: true } });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    test('should not call onChange when disabled', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(<Checkbox checked={false} onChange={mockOnChange} disabled />);

      wrapper.find(CheckboxInput).simulate('change');
      expect(mockOnChange).toHaveBeenCalledTimes(0);
    });

  });

});
