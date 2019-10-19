// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import LatticeLuxonUtils from './utils';
import { latticeMuiTheme } from './styles';

type DateChange = (date :DateTime, value ?:string | null) => void;
type Props = {
  onChange :DateChange;
  value :DateTime;
}

const MaterialDatePicker = (props :Props) => {
  const { onChange, value, ...rest } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const time = DateTime.fromISO(value);
    if (time.isValid) {
      setSelectedDate(time);
    }
  }, [value]);

  const handleDateChange = useCallback<DateChange>((date) => {
    if (isFunction(onChange)) {
      const time = date.toLocaleString(DateTime.TIME_24_SIMPLE);
      onChange(time);
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardTimePicker
            ampm={false}
            inputVariant="outlined"
            mask="__:__"
            onChange={handleDateChange}
            placeholder="e.g 08:00"
            showTodayButton
            value={selectedDate}
            variant="inline"
            {...rest} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default MaterialDatePicker;
