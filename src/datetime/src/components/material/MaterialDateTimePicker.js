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

const MaterialDateTimePicker = (props :Props) => {
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
            inputVariant="outlined"
            onChange={handleDateTimeChange}
            format="MM/dd/yyyy hh:mm a"
            mask="__/__/____ __:__ _M"
            value={selectedDateTime}
            variant="inline" />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default MaterialDateTimePicker;
