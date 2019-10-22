// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LatticeLuxonUtils from './utils';
import { latticeMuiTheme } from './styles';

const ClockIcon = <FontAwesomeIcon icon={faClock} />;

type TimeChange = (date :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  onChange :(timeIso :string) => void;
  value :string;
}

const TimePicker = (props :Props) => {
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

  const handleDateChange = useCallback<TimeChange>((date) => {
    if (isFunction(onChange)) {
      if (date === null || !date.isValid) {
        onChange('');
      }
      else {
        onChange(date.toLocaleString(DateTime.TIME_24_SIMPLE));
      }
    }
    setSelectedDate(date);

  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardTimePicker
            ampm
            disabled={disabled}
            format="hh:mm a"
            inputVariant="outlined"
            mask="__:__ _M"
            keyboardIcon={ClockIcon}
            onChange={handleDateChange}
            placeholder="HH:MM AM"
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

TimePicker.defaultProps = {
  disabled: false,
  value: '',
};

export default TimePicker;
