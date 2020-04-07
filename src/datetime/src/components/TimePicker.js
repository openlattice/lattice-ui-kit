// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useState } from 'react';

import isFunction from 'lodash/isFunction';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { KeyboardTimePicker } from '@material-ui/pickers';
import { DateTime } from 'luxon';

import useInputPropsMemo from './hooks/useInputPropsMemo';

const ClockIcon = <FontAwesomeIcon icon={faClock} />;

type DateChange = (date :DateTime, value :string | null) => void;
type Props = {
  disabled :boolean;
  format :string;
  fullWidth :boolean;
  mask :string;
  onChange :(timeIso :string) => void;
  placeholder :string;
  value :string;
}

const TimePicker = (props :Props) => {
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

  const handleDateChange = useCallback<DateChange>((date) => {
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

  return (
    <KeyboardTimePicker
        ampm
        InputProps={inputProps}
        disabled={disabled}
        format={format}
        fullWidth={fullWidth}
        inputVariant="outlined"
        keyboardIcon={ClockIcon}
        mask={mask}
        onChange={handleDateChange}
        placeholder={placeholder}
        value={selectedDate}
        variant="inline"
        // $FlowFixMe inexact pattern
        {...other} />
  );
};

TimePicker.defaultProps = {
  disabled: false,
  format: 'hh:mm a',
  fullWidth: true,
  mask: '__:__ _M',
  placeholder: 'HH:MM AM',
  value: '',
};

export default TimePicker;
