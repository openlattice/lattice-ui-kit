import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';

import Search from './Search';
import Input from '../../../../input';
import { CheckboxSelect } from '../../../../select';
import { Card } from '../../../../layout';
import { DatePicker } from '../../../../datetime';
import { mockFilterFields } from './constants';

describe('Search', () => {

  describe('snapshots', () => {

    test('should match snapshot', () => {
      const wrapper = shallow(<Search />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

  });

  describe('render', () => {

    describe('render defaults', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallow(<Search />);
      });

      test('render Card', () => {
        expect(wrapper.find(Card)).toHaveLength(1);
      });

      test('default search fields', () => {
        expect(wrapper.find(Input)).toHaveLength(2);
        expect(wrapper.find(DatePicker)).toHaveLength(1);
      });

      test('search button', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
      });
    });

    describe('render with props', () => {
      test('should render provided title', () => {
        const wrapper = shallow(<Search title="Title" />);
        expect(wrapper.find('Title').text()).toEqual('Title');
      });

      test('should not render undefined title', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper.find('Title')).toHaveLength(0);
      });

      test('should render provided filterFields', () => {
        const wrapper = shallow(<Search filterFields={mockFilterFields} />);
        expect(wrapper.find(CheckboxSelect)).toHaveLength(3);
      });
    });

  });

  describe('onSearch()', () => {
    test('should call handleOnClickSearchButton', () => {
      const wrapper = mount(<Search />);
      const instance = wrapper.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      wrapper.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
    });

    test('should invoke onSearch', () => {
      const mockOnSearch = jest.fn();
      const wrapper = mount(<Search onSearch={mockOnSearch} />);
      const instance = wrapper.instance();
      const handleOnClickSearchButtonSpy = jest.spyOn(instance, 'handleOnClickSearchButton');

      instance.forceUpdate();
      wrapper.find('Button').simulate('click');

      expect(handleOnClickSearchButtonSpy).toHaveBeenCalledTimes(1);
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

    test('delete input', () => {
      const wrapper = shallow(<Search />);
      const firstNameInput = wrapper.find('Input[name="firstname"]');

      expect(firstNameInput).toHaveLength(1);
      expect(firstNameInput.type()).toEqual(Input);

      const changeValue = undefined;
      const initialSearchFieldValues = wrapper.state('searchFieldValues');
      const expectedSearchFieldValues = initialSearchFieldValues.set('firstname', '');

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
