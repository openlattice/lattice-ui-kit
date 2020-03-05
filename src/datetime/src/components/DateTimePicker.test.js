import React from 'react';

import toJson from 'enzyme-to-json';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { mount } from 'enzyme';
import { DateTime } from 'luxon';
import { act } from 'react-dom/test-utils';

import DateTimePicker from './DateTimePicker';
import LatticeLuxonUtils from './utils/LatticeLuxonUtils';

import { lightTheme } from '../../../theme';

const invalidDateTime = DateTime.local(null);
const validDateTime = DateTime.local();
const validDateTimeStr = DateTime.local().toISO();

describe('DateTimePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(
      <ThemeProvider theme={lightTheme}>
        <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
          <DateTimePicker />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null calls onChange undefined', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DateTimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      act(() => {
        const innerChange = wrapper.find(KeyboardDateTimePicker).prop('onChange');
        innerChange(null);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual();
    });

    test('invalid date does not call onChange', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DateTimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      act(() => {
        const innerChange = wrapper.find(KeyboardDateTimePicker).prop('onChange');
        innerChange(invalidDateTime);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(0);
    });

    test('valid date calls onChange with ISO datetime string', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DateTimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);
      act(() => {
        const innerChange = wrapper.find(KeyboardDateTimePicker).prop('onChange');
        innerChange(validDateTime);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDateTime.toISO());
    });
  });

  describe('value', () => {
    test('valid parsed times are passed to KeyboardDateTimePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DateTimePicker value={validDateTimeStr} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardDateTimePicker).prop('value')).toEqual(DateTime.fromISO(validDateTimeStr));
    });

    test('invalid parsed times are not passed to KeyboardDateTimePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DateTimePicker value="invalid" />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardDateTimePicker).prop('value')).toEqual(null);
    });
  });

  describe('input should preventDefault onKeyPress only for Enter', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
          <DateTimePicker />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
    const input = wrapper.find('input');

    expect(preventDefault).toHaveBeenCalledTimes(0);

    input.simulate('keyDown', {
      preventDefault,
      key: 'Enter'
    });

    expect(preventDefault).toHaveBeenCalledTimes(1);

    input.simulate('keyDown', {
      preventDefault,
      key: 'Escape'
    });

    expect(preventDefault).toHaveBeenCalledTimes(1);
  });

});
