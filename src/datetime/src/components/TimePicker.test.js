import React from 'react';

import toJson from 'enzyme-to-json';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { mount } from 'enzyme';
import { DateTime } from 'luxon';
import { act } from 'react-dom/test-utils';

import LatticeLuxonUtils from './utils/LatticeLuxonUtils';
import TimePicker from './TimePicker';
import { lightTheme } from './styles';

const invalidTime = DateTime.local(null);
const validDate = DateTime.local();
const validTimeStr = '23:11';

describe('TimePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(
      <ThemeProvider theme={lightTheme}>
        <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
          <TimePicker />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null calls onChange with undefined', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <TimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardTimePicker).prop('onChange');
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
            <TimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardTimePicker).prop('onChange');
        innerChange(invalidTime);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(0);
    });

    test('valid date calls onChange with ISO time string', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <TimePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardTimePicker).prop('onChange');
        innerChange(validDate);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDate.toLocaleString(DateTime.TIME_24_SIMPLE));
    });
  });

  describe('value', () => {
    test('valid parsed times are passed to KeyboardTimePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <TimePicker value={validTimeStr} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardTimePicker).prop('value')).toEqual(DateTime.fromISO(validTimeStr));
    });

    test('invalid parsed times are not passed to KeyboardTimePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={lightTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <TimePicker value="invalid" />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardTimePicker).prop('value')).toEqual(null);
    });
  });

  describe('input should preventDefault onKeyPress only for Enter', () => {
    const preventDefault = jest.fn();
    const wrapper = mount(
      <ThemeProvider theme={lightTheme}>
        <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
          <TimePicker />
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
