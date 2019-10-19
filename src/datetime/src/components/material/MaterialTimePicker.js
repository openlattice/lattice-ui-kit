// @flow
import React, { useCallback, useState } from 'react';
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
  const { onChange, ...rest } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = useCallback<DateChange>((date, value) => {
    if (isFunction(onChange)) {
      onChange(value, date);
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
            showTodayButton
            value={selectedDate}
            variant="inline"
            {...rest} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default MaterialDatePicker;
