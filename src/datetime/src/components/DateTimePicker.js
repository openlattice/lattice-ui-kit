// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';

import useInputPropsMemo from './hooks/useInputPropsMemo';

const DateTimePicker = (props :typeof KeyboardDateTimePicker) => {
  const {
    disabled,
    format,
    fullWidth,
    mask,
    onChange,
    placeholder,
    value,
    ...other
  } = props;

  const [selectedDate, setSelectedDate] = useState(null);
  const [lastValidDate, setLastValidDate] = useState(null);

  useEffect(() => {
    const date = DateTime.fromISO(value);
    if (date.isValid) {
      setSelectedDate(date);
      setLastValidDate(date);
    }
    else {
      setSelectedDate(null);
      setLastValidDate(null);
    }
  }, [value]);

  const inputProps = useInputPropsMemo(lastValidDate, setSelectedDate);

  const handleDateTimeChange = useCallback((date) => {
    if (isFunction(onChange)) {
      if (date === null) {
        onChange();
        setLastValidDate(null);
      }
      if (date && date.isValid) {
        const dateIso = date.toISO();
        onChange(dateIso);
        setLastValidDate(date);
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <KeyboardDateTimePicker
        ampm
        disabled={disabled}
        format={format}
        fullWidth={fullWidth}
        InputProps={inputProps}
        inputVariant="filled"
        mask={mask}
        onChange={handleDateTimeChange}
        placeholder={placeholder}
        value={selectedDate}
        variant="inline"
        {...other} />
  );
};

DateTimePicker.defaultProps = {
  disabled: false,
  format: 'MM/dd/yyyy hh:mm a',
  fullWidth: true,
  mask: '__/__/____ __:__ _M',
  placeholder: 'MM/DD/YYYY HH:MM AM',
  value: ''
};

export default DateTimePicker;
