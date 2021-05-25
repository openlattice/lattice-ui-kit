import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import Checkbox from './Checkbox';
import {
  CheckboxButtonIndicator,
  CheckboxIndicator,
  CheckboxInput,
  CheckboxPillIndicator,
  ChoiceLabel
} from './styled';

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

    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = mount(<Checkbox {...nativeProps} />)
      .find('input')
      .props();
    expect(wrapper).toEqual(expect.objectContaining(nativeProps));
  });

  describe('Checkbox', () => {

    test('should be unchecked by default', () => {
      const wrapper = mount(<Checkbox />);
      expect(wrapper.find('input').prop('checked')).toEqual(undefined);
    });

    test('should render ChoiceLabel', () => {
      const wrapper = mount(<Checkbox label="test" />);
      expect(wrapper.find(ChoiceLabel).text()).toBe('test');
    });

    test('should render CheckboxIndicator', () => {
      const wrapper = mount(<Checkbox />);
      expect(wrapper.find(CheckboxIndicator).exists()).toBe(true);
    });

    test('should render CheckboxInput', () => {
      const wrapper = mount(<Checkbox />);
      expect(wrapper.find(CheckboxInput).exists()).toBe(true);
    });

  });

  describe('onChange', () => {

    test('should call onChange once', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(<Checkbox onChange={mockOnChange} />);

      wrapper.find(CheckboxInput).simulate('change', { target: { checked: true } });
      expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

  });

  describe('mode', () => {

    test('should render CheckboxButtonIndicator when passed a label and mode="button"', () => {
      const wrapper = mount(<Checkbox label="Checkbox Button" mode="button" />);
      expect(wrapper.find(CheckboxButtonIndicator).exists()).toBe(true);
    });

    test('should render CheckboxPillIndicator when passed a label and mode="pill"', () => {
      const wrapper = mount(<Checkbox label="Checkbox Pill" mode="pill" />);
      expect(wrapper.find(CheckboxPillIndicator).exists()).toBe(true);
    });
  });

});
