import React from 'react';

import toJson from 'enzyme-to-json';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { mount } from 'enzyme';
import { DateTime } from 'luxon';
import { act } from 'react-dom/test-utils';

import DatePicker from './DatePicker';
import LatticeLuxonUtils from './utils/LatticeLuxonUtils';
import { latticeMaterialTheme } from './styles';

const invalidDate = DateTime.local(null);
const validDate = DateTime.local();
const validDateStr = '2019-01-01';

describe('DatePicker', () => {

  test('render matches snapshot', () => {
    const tree = mount(
      <ThemeProvider theme={latticeMaterialTheme}>
        <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
          <DatePicker />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });

  describe('onChange', () => {

    test('null calls onChange with undefined', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardDatePicker).prop('onChange');
        innerChange(null);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual();
      expect(wrapper.find(KeyboardDatePicker).prop('value')).toEqual(null);
    });

    test('invalid date does not call onChange', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardDatePicker).prop('onChange');
        innerChange(invalidDate);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(0);
    });

    test('valid date calls onChange with ISO date string', () => {
      const mockOnChange = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker onChange={mockOnChange} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(mockOnChange).toHaveBeenCalledTimes(0);

      act(() => {
        const innerChange = wrapper.find(KeyboardDatePicker).prop('onChange');
        innerChange(validDate);
      });

      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange.mock.calls[0][0]).toEqual(validDate.toISODate());
    });
  });

  describe('value', () => {
    test('valid parsed dates are passed to KeyboardDatePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker value={validDateStr} />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardDatePicker).prop('value')).toEqual(DateTime.fromISO(validDateStr));
    });

    test('invalid parsed dates are not passed to KeyboardDatePicker', () => {
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker value="invalid" />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );
      expect(wrapper.find(KeyboardDatePicker).prop('value')).toEqual(null);
    });
  });

  describe('InputProps', () => {
    test('input should preventDefault only for Enter keyPress', () => {
      const preventDefault = jest.fn();
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker />
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

    test('inner input should have onBlur', () => {
      const wrapper = mount(
        <ThemeProvider theme={latticeMaterialTheme}>
          <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
            <DatePicker />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      );

      expect(typeof wrapper.find('input').prop('onBlur')).toEqual('function');
    });
  });

});
