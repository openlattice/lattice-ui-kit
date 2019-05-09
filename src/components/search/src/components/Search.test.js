import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Search from './Search';
import Input from '../../../../input';
import { Card } from '../../../../layout';
import { DatePicker } from '../../../../datetime';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = mount(<Search />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Search />);
    });

    test('render Card', () => {
      expect(wrapper.find(Card)).toHaveLength(1);
    });

    test('default search fields', () => {
      expect(wrapper.find(Input)).toHaveLength(2);
      expect(wrapper.find(DatePicker)).toHaveLength(1);
    });

    test('search button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

  });

  describe('onSearch()', () => {
    test('should invoke onSearch', () => {
      const mockOnSearch = jest.fn();
      const wrapper = mount(<Search onSearch={mockOnSearch} />);
      wrapper.find('button').simulate('click');
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });
  });

  describe('searchFieldValues', () => {
    test('change input', () => {
      const wrapper = shallow(<Search />);
      const firstNameInput = wrapper.find('Input[name="firstname"]');

      expect(firstNameInput).toHaveLength(1);
      expect(firstNameInput.type()).toEqual(Input);

      const changeValue = 'OpenLattice';
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('firstname', changeValue);

      firstNameInput.simulate('change', { currentTarget: { value: changeValue, name: 'firstname' } });

      const actualSearchFieldValues = wrapper.state('searchFieldValues');
      expect(actualSearchFieldValues).toStrictEqual(expectedSearchFieldValues);

    });

    test('change date', () => {
      const wrapper = shallow(<Search />);
      const datePicker = wrapper.find(DatePicker);

      expect(datePicker).toHaveLength(1);
      expect(datePicker.type()).toEqual(DatePicker);

      const changeValue = '1970-01-01';
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('dob', changeValue);

      datePicker.simulate('change', changeValue);

      const actualSearchFieldValues = wrapper.state('searchFieldValues');
      expect(actualSearchFieldValues).toStrictEqual(expectedSearchFieldValues);

    });
  });

});
