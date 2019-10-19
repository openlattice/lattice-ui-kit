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
  disabled :boolean;
  onChange :(dateIso :string) => void;
  value :string;
}

const MaterialDatePicker = (props :Props) => {
  const { disabled, onChange, value } = props;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const date = DateTime.fromISO(value);
    if (date.isValid) {
      setSelectedDate(date);
    }
  }, [value]);

  const handleDateChange = useCallback<DateChange>((date) => {
    if (isFunction(onChange)) {
      if (date === null || !date.isValid) {
        onChange('');
      }
      else {
        const dateIso = date.toISODate();
        onChange(dateIso);
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <ThemeProvider theme={latticeMuiTheme}>
      <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
        <KeyboardDatePicker
            disabled={disabled}
            format="MM/dd/yyyy"
            inputVariant="outlined"
            onChange={handleDateChange}
            placeholder="MM/DD/YYYY"
            value={selectedDate}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

MaterialDatePicker.defaultProps = {
  value: null
};

export default MaterialDatePicker;
