// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { faCalendarDay } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';

import useInputPropsMemo from './hooks/useInputPropsMemo';

const CalendarIcon = <FontAwesomeIcon icon={faCalendarDay} size="lg" />;

const DateTimePicker = (props :typeof KeyboardDateTimePicker) => {
  const {
    ampm,
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

  const defaultFormat = ampm ? 'MM/dd/yyyy hh:mm a' : 'MM/dd/yyyy HH:mm';
  const defaultMask = ampm ? '__/__/____ __:__ _M' : '__/__/____ __:__';
  const defaultPlaceholder = ampm ? 'MM/DD/YYYY HH:MM AM' : 'MM/DD/YYYY HH:MM';

  return (
    <KeyboardDateTimePicker
        ampm={ampm}
        disabled={disabled}
        format={format || defaultFormat}
        fullWidth={fullWidth}
        InputProps={inputProps}
        inputVariant="filled"
        keyboardIcon={CalendarIcon}
        mask={mask || defaultMask}
        onChange={handleDateTimeChange}
        placeholder={placeholder || defaultPlaceholder}
        value={selectedDate}
        variant="inline"
        {...other} />
  );
};

DateTimePicker.defaultProps = {
  ampm: true,
  disabled: false,
  fullWidth: true,
  value: ''
};

export default DateTimePicker;
