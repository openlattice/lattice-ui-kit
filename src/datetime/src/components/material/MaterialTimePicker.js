// @flow
import React, { useCallback, useState } from 'react';
import isFunction from 'lodash/isFunction';
import LuxonUtils from '@date-io/luxon';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { latticeMuiTheme } from './styles';

type DateChange = (date :DateTime, value ?:string | null) => void;
type Props = {
  onChange :DateChange;
  value :DateTime;
}

const MaterialDatePicker = (props :Props) => {
  const { onChange } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = useCallback<DateChange>((date, value) => {
    if (isFunction(onChange)) {
      onChange(value, date);
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <KeyboardTimePicker
            ampm={false}
            inputVariant="outlined"
            mask="__:__"
            onChange={handleDateChange}
            showTodayButton
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default MaterialDatePicker;
