import React from 'react';
import { DateTime } from 'luxon';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { KeyboardDatePicker } from '@material-ui/pickers';

import DatePicker from './DatePicker';

const invalidDate = DateTime.local(null);
const validDate = DateTime.local();
const validDateStr = '2019-01-01';

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(<DatePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null or invalid date calls onChange with empty string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<DatePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardDatePicker).prop('onChange');

      innerChange(null);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual('');

      innerChange(invalidDate);
      expect(mockOnChange).toHaveBeenCalledTimes(2);
      expect(mockOnChange.mock.calls[1][0]).toEqual('');
    });

    test('valid date calls onChange with ISO date string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<DatePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardDatePicker).prop('onChange');

      innerChange(validDate);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDate.toISODate());
    });
  });

  describe('value', () => {
    test('valid parsed dates are passed to KeyboardDatePicker', () => {
      const wrapper = mount(<DatePicker value={validDateStr} />);
      expect(wrapper.find(KeyboardDatePicker).prop('value')).toEqual(DateTime.fromISO(validDateStr));
    });

    test('invalid parsed dates are not passed to KeyboardDatePicker', () => {
      const wrapper = mount(<DatePicker value="invalid" />);
      expect(wrapper.find(KeyboardDatePicker).prop('value')).toEqual(null);
    });
  });

});
