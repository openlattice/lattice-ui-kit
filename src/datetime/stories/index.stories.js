import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { DateTime } from 'luxon';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { DatePicker, DateTimePicker, TimePicker } from '../index';

const dateMuiChange = action('MUI Date changed');
const timeMuiChange = action('MUI Time changed');
const datetimeMuiChange = action('MUI DateTime changed');

storiesOf('Date and Time', module)
  .add('Date', ({ isDark }) => {
    const [selectedDate, setSelectedDate] = useState('2019-01-01');
    const bgColor = isDark ? '#1F1E24' : undefined;
    return (
      <div>
        <h1>
          Date Picker
        </h1>
        <Card>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DatePicker onChange={dateMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DatePicker
                disabled
                value="2019-01-01"
                onChange={dateMuiChange} />
            <br />
            <Label subtle>Provided Value</Label>
            <DatePicker
                value="2019-01-01"
                onChange={dateMuiChange} />
            <br />
            <Label subtle>Controlled</Label>
            <DatePicker
                onChange={(value) => {
                  dateMuiChange(value);
                  setSelectedDate(value);
                }}
                value={selectedDate} />
          </CardSegment>
        </Card>
      </div>
    );
  })
  .add('Time', ({ isDark }) => {
    const [selectedTime, setSelectedTime] = useState('23:11');
    const bgColor = isDark ? '#1F1E24' : undefined;
    return (
      <div>
        <h1>
          Time Picker
        </h1>
        <Card>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <TimePicker onChange={timeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <TimePicker
                disabled
                onChange={timeMuiChange} />
            <br />
            <Label subtle>Provided Value</Label>
            <TimePicker
                onChange={timeMuiChange}
                value="23:11" />
            <br />
            <Label subtle>Controlled</Label>
            <TimePicker
                onChange={(value) => {
                  timeMuiChange(value);
                  setSelectedTime(value);
                }}
                value={selectedTime} />
          </CardSegment>
        </Card>
      </div>
    );
  })
  .add('DateTime', ({ isDark }) => {
    const [selectedDateTime, setDateTime] = useState(DateTime.local().toISO());
    const bgColor = isDark ? '#1F1E24' : undefined;
    return (
      <div>
        <h1>DateTime Picker</h1>
        <Card>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DateTimePicker onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DateTimePicker
                disabled
                onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Provided Value</Label>
            <DateTimePicker
                value={DateTime.local().toISO()}
                onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Controlled</Label>
            <DateTimePicker
                onChange={(value) => {
                  datetimeMuiChange(value);
                  setDateTime(value);
                }}
                value={selectedDateTime} />
          </CardSegment>
        </Card>
      </div>
    );
  });
