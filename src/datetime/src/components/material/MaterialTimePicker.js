// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils';
import { latticeMuiTheme } from './styles';

type TimeChange = (date :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  onChange :(timeIso :string) => void;
  value :string;
}

const MaterialTimePicker = (props :Props) => {
  const {
    disabled,
    onChange,
    value
  } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const timeIso = DateTime.fromISO(value);
    if (timeIso.isValid) {
      setSelectedDate(timeIso);
    }
  }, [value]);

  const handleDateChange = useCallback<TimeChange>((date, inputValue) => {
    if (inputValue !== null && date !== null) {
      const parsedTime = DateTime.fromFormat(inputValue, 'h:mm a');
      if (isFunction(onChange)) {
        if (parsedTime.isValid || date.isValid) {
          onChange(parsedTime.toLocaleString(DateTime.TIME_24_SIMPLE));
        }
        else {
          onChange('');
        }
      }
      setSelectedDate(parsedTime);
    }
    else {

      setSelectedDate(null);
    }

  }, [onChange]);
  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardTimePicker
            disabled={disabled}
            inputVariant="outlined"
            mask="__:__ _M"
            onChange={handleDateChange}
            placeholder="e.g 08:00"
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

MaterialTimePicker.defaultProps = {
  value: '',
};

export default MaterialTimePicker;
