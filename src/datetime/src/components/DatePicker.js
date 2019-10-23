// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils/LatticeLuxonUtils';
import useInputPropsMemo from './hooks/useInputPropsMemo';
import { latticeMuiTheme } from './styles';

type DateChange = (date :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  format :string;
  mask :string;
  onChange :(dateIso :string) => void;
  placeholder :string;
  value :string;
}

const DatePicker = (props :Props) => {
  const {
    disabled,
    format,
    mask,
    onChange,
    placeholder,
    value
  } = props;

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const date = DateTime.fromISO(value);
    if (date.isValid) {
      setSelectedDate(date);
    }
  }, [value]);

  const InputProps = useInputPropsMemo();

  const handleDateChange = useCallback<DateChange>((date) => {
    if (isFunction(onChange)) {
      if (date === null || !date.isValid) {
        onChange('');
      }
      else {
        onChange(date.toISODate());
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardDatePicker
            disabled={disabled}
            format={format}
            InputProps={InputProps}
            inputVariant="outlined"
            mask={mask}
            onChange={handleDateChange}
            placeholder={placeholder}
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  format: 'MM/dd/yyyy',
  placeholder: 'MM/DD/YYYY',
  mask: '__/__/____',
  value: ''
};

export default DatePicker;
