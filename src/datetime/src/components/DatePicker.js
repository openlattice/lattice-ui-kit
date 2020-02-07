// @flow
import React, { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { DateTime } from 'luxon';

import LatticeLuxonUtils from './utils/LatticeLuxonUtils';
import useInputPropsMemo from './hooks/useInputPropsMemo';
import { latticeMuiTheme } from './styles';

type DateChange = (date :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  format :string;
  fullWidth :boolean;
  mask :string;
  onChange :(dateIso :string) => void;
  placeholder :string;
  value :string;
}

const DatePicker = (props :Props) => {
  const {
    disabled,
    format,
    fullWidth,
    mask,
    onChange,
    placeholder,
    value,
    ...other
  } = props;

  const [selectedDate, setSelectedDate] = useState(null);
  const [lastValidDate, setLastValidDate] = useState(null);

  useEffect(() => {
    const date = DateTime.fromISO(value);
    if (date.isValid) {
      setSelectedDate(date);
      setLastValidDate(date);
    }
    else {
      setSelectedDate(null);
      setLastValidDate(null);
    }
  }, [value]);

  const inputProps = useInputPropsMemo(lastValidDate, setSelectedDate);

  const handleDateChange = useCallback<DateChange>((date) => {
    if (isFunction(onChange)) {
      if (date === null) {
        onChange();
        setLastValidDate(null);
      }
      if (date && date.isValid) {
        const dateIso = date.toISODate();
        onChange(dateIso);
        setLastValidDate(date);
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
            fullWidth={fullWidth}
            InputProps={inputProps}
            inputVariant="outlined"
            mask={mask}
            onChange={handleDateChange}
            placeholder={placeholder}
            value={selectedDate}
            variant="inline"
            {...other} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

DatePicker.defaultProps = {
  disabled: false,
  format: 'MM/dd/yyyy',
  fullWidth: true,
  placeholder: 'MM/DD/YYYY',
  mask: '__/__/____',
  value: ''
};

export default DatePicker;
