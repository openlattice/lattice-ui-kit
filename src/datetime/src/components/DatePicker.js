// @flow
/* eslint-disable react/jsx-props-no-spreading */
import { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { faCalendarDay } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';

import useInputPropsMemo from './hooks/useInputPropsMemo';

const CalendarIcon = <FontAwesomeIcon icon={faCalendarDay} size="lg" />;

const DatePicker = (props :typeof KeyboardDatePicker) => {
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

  const handleDateChange = useCallback((date) => {
    if (isFunction(onChange)) {
      if (date === null) {
        onChange();
        setLastValidDate(null);
      }
      if (date && date.isValid) {
        const dateIso = date.toISODate();
        onChange(dateIso);
        setLastValidDate(date);
      }
    }
    setSelectedDate(date);
  }, [onChange]);

  return (
    <KeyboardDatePicker
        disabled={disabled}
        format={format}
        fullWidth={fullWidth}
        InputProps={inputProps}
        inputVariant="filled"
        keyboardIcon={CalendarIcon}
        mask={mask}
        onChange={handleDateChange}
        placeholder={placeholder}
        value={selectedDate}
        variant="inline"
        {...other} />
  );
};

DatePicker.defaultProps = {
  disabled: false,
  format: 'MM/dd/yyyy',
  fullWidth: true,
  placeholder: 'MM/DD/YYYY',
  mask: '__/__/____',
  value: ''
};

export default DatePicker;
