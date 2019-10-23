import React from 'react';
import { DateTime } from 'luxon';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

import DateTimePicker from './DateTimePicker';

const invalidDateTime = DateTime.local(null);
const validDateTime = DateTime.local();
const validDateTimeStr = DateTime.local().toISO();

describe('DateTimePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(<DateTimePicker />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null or invalid date calls onChange with empty string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<DateTimePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardDateTimePicker).prop('onChange');

      innerChange(null);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual('');

      innerChange(invalidDateTime);
      expect(mockOnChange).toHaveBeenCalledTimes(2);
      expect(mockOnChange.mock.calls[1][0]).toEqual('');
    });

    test('valid date calls onChange with ISO datetime string', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(<DateTimePicker onChange={mockOnChange} />);

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      const innerChange = wrapper.find(KeyboardDateTimePicker).prop('onChange');

      innerChange(validDateTime);
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDateTime.toISO());
    });
  });

  describe('value', () => {
    test('valid parsed times are passed to KeyboardDateTimePicker', () => {
      const wrapper = mount(<DateTimePicker value={validDateTimeStr} />);
      expect(wrapper.find(KeyboardDateTimePicker).prop('value')).toEqual(DateTime.fromISO(validDateTimeStr));
    });

    test('invalid parsed times are not passed to KeyboardDateTimePicker', () => {
      const wrapper = mount(<DateTimePicker value="invalid" />);
      expect(wrapper.find(KeyboardDateTimePicker).prop('value')).toEqual(null);
    });
  });

});
