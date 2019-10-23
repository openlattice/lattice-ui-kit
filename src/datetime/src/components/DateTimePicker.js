// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils';
import { latticeMuiTheme } from './styles';
import useInputPropsMemo from './hooks/useInputPropsMemo';

type DateTimeChange = (datetime :DateTime, value :string | null) => void;
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

  const [selectedDateTime, setDateTime] = useState(null);

  useEffect(() => {
    const datetime = DateTime.fromISO(value);
    if (datetime.isValid) {
      setDateTime(datetime);
    }
  }, [value]);

  const inputProps = useInputPropsMemo();

  const handleDateTimeChange = useCallback<DateTimeChange>((datetime :DateTime) => {
    if (isFunction(onChange)) {
      if (datetime === null || !datetime.isValid) {
        onChange('');
      }
      else {
        onChange(datetime.toISO());
      }
    }
    setDateTime(datetime);
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
            value={selectedDateTime}
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
