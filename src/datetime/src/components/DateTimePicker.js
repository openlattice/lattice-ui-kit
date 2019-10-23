// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils/LatticeLuxonUtils';
import { latticeMuiTheme } from './styles';
import useInputPropsMemo from './hooks/useInputPropsMemo';

type DateChange = (datetime :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  format :string;
  mask :string;
  onChange :(datetimeIso :string) => void;
  placeholder :string;
  value :string;
};

const DateTimePicker = (props :Props) => {
  const {
    disabled,
    format,
    mask,
    onChange,
    placeholder,
    value
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

  const handleDateTimeChange = useCallback<DateChange>((date) => {
    if (isFunction(onChange)) {
      if (date === null) {
        onChange();
        setLastValidDate(null);
      }
      if (date && date.isValid) {
        const dateIso = date.toISO();
        onChange(dateIso);
        setLastValidDate(date);
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardDateTimePicker
            ampm
            disabled={disabled}
            format={format}
            InputProps={inputProps}
            inputVariant="outlined"
            mask={mask}
            onChange={handleDateTimeChange}
            placeholder={placeholder}
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

DateTimePicker.defaultProps = {
  disabled: false,
  format: 'MM/dd/yyyy  hh:mm a',
  mask: '__/__/____  __:__ _M',
  placeholder: 'MM/DD/YYYY  HH:MM AM',
  value: ''
};

export default DateTimePicker;
