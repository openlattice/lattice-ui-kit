import ReactSelect from 'react-select';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import CheckboxSelect, { defaultProps } from './CheckboxSelect';
import { OPTIONS } from './constants';

import { Checkbox } from '../../../choices';

describe('CheckboxSelect', () => {

  describe('snapshot', () => {

    test('render matches snapshot', () => {
      const tree = mount(<CheckboxSelect />);
      expect(toJson(tree)).toMatchSnapshot();
    });

  });

  describe('props', () => {

    test('internal Select should receive preset props', () => {
      const wrapper = mount(<CheckboxSelect />);
      const selectProps = wrapper.find(ReactSelect).props();

      Object.keys(defaultProps).forEach((key) => {
        expect(selectProps[key]).toEqual(defaultProps[key]);
      });
    });

  });

  describe('data', () => {

    test('should show controlled value', () => {
      const wrapper = mount(
        <CheckboxSelect
            isMulti
            options={OPTIONS}
            value={[OPTIONS[0], OPTIONS[1]]} />
      );
      const actualValue = wrapper.find('Control').get(0).props.getValue();
      const expectedValue = [
        OPTIONS[0],
        OPTIONS[1]
      ];
      expect(actualValue).toEqual(expectedValue);
    });

  });

  describe('style', () => {

    test('clicking should toggle menu', () => {
      const wrapper = mount(<CheckboxSelect />);
      expect(wrapper.find('Menu').exists()).toBeFalsy();
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find('Menu').exists()).toBeTruthy();
    });

    test('menu should render Checkbox options', () => {
      const wrapper = mount(<CheckboxSelect options={OPTIONS} />);
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find(Checkbox)).toHaveLength(5);
    });

    test('selected Checkbox options should be checked', () => {
      const wrapper = mount(
        <CheckboxSelect
            options={OPTIONS}
            value={[OPTIONS[0]]} />
      );
      wrapper.find('DropdownIndicator').simulate('mouseDown', { button: 0 });
      expect(wrapper.find('Checkbox[checked=true]')).toHaveLength(1);
    });

  });

});
