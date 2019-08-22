import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Radio from './Radio';
import { RadioInput, RadioIndicator, ChoiceLabel } from './styled';

describe('Radio', () => {

  test('render matches snapshot', () => {
    const wrapper = mount(<Radio />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should pass through any props to the input', () => {
    const nativeProps = {
      disabled: true,
      name: 'test',
      required: true,
      form: 'test-form',
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<Radio {...nativeProps} />)
      .find('input')
      .props();
    expect(wrapper).toEqual(expect.objectContaining(nativeProps));
  });

  describe('Radio', () => {

    test('should be unchecked by default', () => {
      const wrapper = mount(<Radio />);
      expect(wrapper.find('input').prop('checked')).toEqual(undefined);
    });

    test('should render ChoiceLabel', () => {
      const wrapper = mount(<Radio label="test" />);
      expect(wrapper.find(ChoiceLabel).text()).toBe('test');
    });

    test('should render RadioIndicator', () => {
      const wrapper = mount(<Radio />);
      expect(wrapper.find(RadioIndicator).exists()).toBe(true);
    });

    test('should render RadioInput', () => {
      const wrapper = mount(<Radio />);
      expect(wrapper.find(RadioInput).exists()).toBe(true);
    });

  });

  describe('onChange', () => {

    test('should call onChange once', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(<Radio onChange={mockOnChange} />);

      wrapper.find(RadioInput).simulate('change', { target: { checked: true } });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

  });

});
