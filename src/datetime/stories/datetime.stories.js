import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { DateTime as LuxonDateTime } from 'luxon';

import Label from '../../label';
import {
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from '../../layout';
import { DatePicker, DateTimePicker, TimePicker } from '../index';

const dateMuiChange = action('MUI Date changed');
const timeMuiChange = action('MUI Time changed');
const datetimeMuiChange = action('MUI DateTime changed');

export default {
  title: 'Date and Time',
};

export const Date = ({ isDark }) => {
  const [selectedDate, setSelectedDate] = useState('2019-01-01');
  const bgColor = isDark ? '#1F1E24' : undefined;
  return (
    <div>
      <h1>Date Picker</h1>
      <CardStack>
        <Card>
          <CardHeader padding="sm">filled</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DatePicker onChange={dateMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DatePicker disabled value="2019-01-01" onChange={dateMuiChange} />
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
        <Card>
          <CardHeader padding="sm">outlined</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DatePicker inputVariant="outlined" onChange={dateMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DatePicker
                inputVariant="outlined"
                disabled
                value="2019-01-01"
                onChange={dateMuiChange} />
            <br />
            <Label subtle>Controlled</Label>
            <DatePicker
                inputVariant="outlined"
                onChange={(value) => {
                  dateMuiChange(value);
                  setSelectedDate(value);
                }}
                value={selectedDate} />
          </CardSegment>
        </Card>
      </CardStack>
    </div>
  );
};

export const Time = ({ isDark }) => {
  const [selectedTime, setSelectedTime] = useState('23:11');
  const bgColor = isDark ? '#1F1E24' : undefined;
  return (
    <div>
      <h1>Time Picker</h1>
      <CardStack>
        <Card>
          <CardHeader padding="sm">filled</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <TimePicker onChange={timeMuiChange} />
            <br />
            <Label subtle>24h</Label>
            <TimePicker ampm={false} onChange={timeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <TimePicker disabled onChange={timeMuiChange} />
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
        <Card>
          <CardHeader padding="sm">outlined</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <TimePicker inputVariant="outlined" onChange={timeMuiChange} />
            <br />
            <Label subtle>24h</Label>
            <TimePicker ampm={false} inputVariant="outlined" onChange={timeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <TimePicker inputVariant="outlined" disabled onChange={timeMuiChange} />
            <br />
            <Label subtle>Controlled</Label>
            <TimePicker
                inputVariant="outlined"
                onChange={(value) => {
                  timeMuiChange(value);
                  setSelectedTime(value);
                }}
                value={selectedTime} />
          </CardSegment>
        </Card>
      </CardStack>
    </div>
  );
};

export const DateTime = ({ isDark }) => {
  const [selectedDateTime, setDateTime] = useState(LuxonDateTime.local().toISO());
  const bgColor = isDark ? '#1F1E24' : undefined;
  return (
    <div>
      <h1>DateTime Picker</h1>
      <CardStack>
        <Card>
          <CardHeader padding="sm">filled</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DateTimePicker onChange={datetimeMuiChange} />
            <br />
            <Label subtle>24h</Label>
            <DateTimePicker ampm={false} onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DateTimePicker disabled onChange={datetimeMuiChange} />
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
        <Card>
          <CardHeader padding="sm">outlined</CardHeader>
          <CardSegment bgColor={bgColor} vertical padding="sm">
            <Label subtle>Default</Label>
            <DateTimePicker inputVariant="outlined" onChange={datetimeMuiChange} />
            <br />
            <Label subtle>24h</Label>
            <DateTimePicker ampm={false} inputVariant="outlined" onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Disabled</Label>
            <DateTimePicker inputVariant="outlined" disabled onChange={datetimeMuiChange} />
            <br />
            <Label subtle>Controlled</Label>
            <DateTimePicker
                inputVariant="outlined"
                onChange={(value) => {
                  datetimeMuiChange(value);
                  setDateTime(value);
                }}
                value={selectedDateTime} />
          </CardSegment>
        </Card>
      </CardStack>
    </div>
  );
};
