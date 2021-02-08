// @flow
/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { faClock } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';

import useInputPropsMemo from './hooks/useInputPropsMemo';

const ClockIcon = <FontAwesomeIcon icon={faClock} size="lg" />;

const TimePicker = (props :typeof KeyboardTimePicker) => {
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

  const handleDateChange = useCallback((date) => {
    if (isFunction(onChange)) {
      if (date === null) {
        onChange();
        setLastValidDate(null);
      }
      if (date && date.isValid) {
        const timeIso = date.toLocaleString(DateTime.TIME_24_SIMPLE);
        onChange(timeIso);
        setLastValidDate(date);
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  const defaultFormat = ampm ? 'hh:mm a' : 'HH:mm';
  const defaultMask = ampm ? '__:__ _M' : '__:__';
  const defaultPlaceholder = ampm ? 'HH:MM AM' : 'HH:MM';

  return (
    <KeyboardTimePicker
        ampm={ampm}
        InputProps={inputProps}
        disabled={disabled}
        format={format || defaultFormat}
        fullWidth={fullWidth}
        inputVariant="filled"
        keyboardIcon={ClockIcon}
        mask={mask || defaultMask}
        onChange={handleDateChange}
        placeholder={placeholder || defaultPlaceholder}
        value={selectedDate}
        variant="inline"
        {...other} />
  );
};

TimePicker.defaultProps = {
  ampm: true,
  disabled: false,
  fullWidth: true,
  value: '',
};

export default TimePicker;
