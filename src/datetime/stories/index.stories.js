import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card, CardSegment } from '../../layout';
import Label from '../../label';
import { DatePicker, TimePicker } from '../index';
import MaterialDatePicker from '../src/components/material/MaterialDatePicker';
import MaterialTimePicker from '../src/components/material/MaterialTimePicker';

const dateChange = action('Date changed');
const timeChange = action('Time changed');

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

storiesOf('Date and Time', module)
  .add('Date', () => {
    const [selectedDate, setSelectedDate] = useState('2019-01-01');
    return (
      <div>
        <h1>
          Date Picker
        </h1>
        <Grid>
          <Card>
            <CardSegment vertical padding="sm">
              <h3>Atlaskit</h3>
              <Label subtle>Default</Label>
              <DatePicker
                  onChange={dateChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <DatePicker
                  isDisabled
                  placeholder="disabled"
                  onChange={dateChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <DatePicker
                  value="2019-09-28"
                  onChange={dateChange} />
              <hr />
              <Label subtle>Controlled</Label>
              <DatePicker
                  value={selectedDate}
                  onChange={(date, analytics) => {
                    setSelectedDate(date);
                    dateChange(date, analytics);
                  }} />
              <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
                Atlaskit Documentation
              </a>
            </CardSegment>
          </Card>
          <Card>
            <CardSegment vertical padding="sm">
              <h3>Material</h3>
              <Label subtle>Default</Label>
              <MaterialDatePicker onChange={dateChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <MaterialDatePicker
                  placeholder="disabled"
                  disabled
                  onChange={dateChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <MaterialDatePicker
                  value="2019-09-28"
                  onChange={dateChange} />
              <hr />
              <Label subtle>Controlled</Label>
              <MaterialDatePicker
                  value={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    dateChange(date);
                  }} />
            </CardSegment>
          </Card>
        </Grid>
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
        <Grid>
          <Card>
            <CardSegment vertical padding="sm">
              <h3>Atlaskit</h3>
              <Label subtle>Default</Label>
              <TimePicker
                  onChange={timeChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <TimePicker
                  isDisabled
                  onChange={timeChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <TimePicker
                  onChange={timeChange}
                  value="23:11" />
              <hr />
              <Label subtle>Controlled</Label>
              <TimePicker
                  onChange={(time) => {
                    setSelectedTime(time);
                    timeChange(time);
                  }}
                  value={selectedTime} />
              <hr />
              <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
                Atlaskit Documentation
              </a>
            </CardSegment>
          </Card>
          <Card>
            <CardSegment vertical padding="sm">
              <h3>Material</h3>
              <Label subtle>Default</Label>
              <MaterialTimePicker onChange={timeChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <MaterialTimePicker
                  disabled
                  onChange={timeChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <MaterialTimePicker
                  onChange={timeChange}
                  value="23:11" />
              <hr />
              <Label subtle>Controlled</Label>
              <MaterialTimePicker
                  onChange={(time) => {
                    setSelectedTime(time);
                    timeChange(time);
                  }}
                  value={selectedTime} />
            </CardSegment>
          </Card>
        </Grid>
      </div>
    );
  });
