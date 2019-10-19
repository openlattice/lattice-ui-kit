// @flow
import React, { useCallback, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import { DateTime } from 'luxon';
import { ThemeProvider } from '@material-ui/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

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
    setSelectedDate(value);
  }, [value]);

  const handleDateChange = useCallback<DateChange>((date, dateAsString) => {
    if (isFunction(onChange)) {
      onChange(dateAsString, date);
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardDatePicker
            format="MM/dd/yyyy"
            inputVariant="outlined"
            onChange={handleDateChange}
            placeholder="MM/DD/YYYY"
            value={selectedDate}
            variant="inline"
            {...rest} />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

MaterialDatePicker.defaultProps = {
  value: null
};

export default MaterialDatePicker;
