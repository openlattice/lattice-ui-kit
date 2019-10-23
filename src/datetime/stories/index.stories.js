import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { DatePicker, TimePicker, DateTimePicker } from '../index';

const dateMuiChange = action('MUI Date changed');
const timeMuiChange = action('MUI Time changed');
const datetimeMuiChange = action('MUI DateTime changed');

storiesOf('Date and Time', module)
  .add('Date', () => {
    const [selectedDate, setSelectedDate] = useState('2019-01-01');
    return (
      <div>
        <h1>
          Date Picker
        </h1>
        <Card>
          <CardSegment vertical padding="sm">
            <h3>Material</h3>
            <Label subtle>Default</Label>
            <DatePicker onChange={dateMuiChange} />
            <hr />
            <Label subtle>Disabled</Label>
            <DatePicker
                disabled
                value="2019-01-01"
                onChange={dateMuiChange} />
            <hr />
            <Label subtle>Provided Value</Label>
            <DatePicker
                value="2019-01-01"
                onChange={dateMuiChange} />
            <hr />
            <Label subtle>Controlled</Label>
            <DatePicker
                onChange={(value) => {
                  console.log(value);
                  dateMuiChange(value);
                  setSelectedDate(value);
                }}
                value={selectedDate} />
          </CardSegment>
        </Card>
      </div>
    );
  })
  .add('Time', () => {
    const [selectedTime, setSelectedTime] = useState('23:11');
    return (
      <div>
        <h1>
          Time Picker
        </h1>
        <Card>
          <CardSegment vertical padding="sm">
            <h3>Material</h3>
            <Label subtle>Default</Label>
            <TimePicker onChange={timeMuiChange} />
            <hr />
            <Label subtle>Disabled</Label>
            <TimePicker
                disabled
                onChange={timeMuiChange} />
            <hr />
            <Label subtle>Provided Value</Label>
            <TimePicker
                onChange={timeMuiChange}
                value="23:11" />
            <hr />
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
  .add('DateTime', () => {
    const [selectedDateTime, setDateTime] = useState(DateTime.local().toISO());
    return (
      <div>
        <h1>DateTime Picker</h1>
        <Card>
          <CardSegment vertical padding="sm">
            <h3>Material</h3>
            <Label subtle>Default</Label>
            <DateTimePicker onChange={datetimeMuiChange} />
            <hr />
            <Label subtle>Disabled</Label>
            <DateTimePicker
                disabled
                onChange={datetimeMuiChange} />
            <hr />
            <Label subtle>Provided Value</Label>
            <DateTimePicker
                value={DateTime.local().toISO()}
                onChange={datetimeMuiChange} />
            <hr />
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
