// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils';
import { latticeMuiTheme } from './styles';

type DateTimeChange = (datetime :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  onChange :(datetimeIso :string) => void;
  value :string;
};

const DateTimePicker = (props :Props) => {
  const { disabled, onChange, value } = props;
  const [selectedDateTime, setDateTime] = useState(null);

  useEffect(() => {
    const datetime = DateTime.fromISO(value);
    if (datetime.isValid) {
      setDateTime(datetime);
    }
  }, [value]);

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
            format="MM/dd/yyyy  hh:mm a"
            inputVariant="outlined"
            mask="__/__/____  __:__ _M"
            onChange={handleDateTimeChange}
            placeholder="MM/DD/YYYY  HH:MM AM"
            value={selectedDateTime}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

DateTimePicker.defaultProps = {
  disabled: false,
  value: ''
};

export default DateTimePicker;
