import React from 'react';
import { DateTime } from 'luxon';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { KeyboardTimePicker } from '@material-ui/pickers';

import TimePicker from './TimePicker';

const invalidTime = DateTime.local(null);
const validDate = DateTime.local();
const validTimeStr = '23:11';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    // Use shallow render to avoid the current date from imposing on snapshot
    const tree = shallow(<TimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null or invalid date calls onChange with empty string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<TimePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardTimePicker).prop('onChange');

      innerChange(null);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual('');

      innerChange(invalidTime);
      expect(mockOnChange).toHaveBeenCalledTimes(2);
      expect(mockOnChange.mock.calls[1][0]).toEqual('');
    });

    test('valid date calls onChange with ISO date string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<TimePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardTimePicker).prop('onChange');

      innerChange(validDate);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDate.toLocaleString(DateTime.TIME_24_SIMPLE));
    });
  });

  describe('value', () => {
    test('valid parsed times are passed to KeyboardDatePicker', () => {
      const wrapper = mount(<TimePicker value={validTimeStr} />);
      expect(wrapper.find(KeyboardTimePicker).prop('value')).toEqual(DateTime.fromISO(validTimeStr));
    });

    test('invalid parsed times are not passed to KeyboardTimePicker', () => {
      const wrapper = mount(<TimePicker value="invalid" />);
      expect(wrapper.find(KeyboardTimePicker).prop('value')).toEqual(null);
    });
  });

});
