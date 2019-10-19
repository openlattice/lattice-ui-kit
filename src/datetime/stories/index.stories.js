import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card, CardSegment } from '../../layout';
import Label from '../../label';
import { DatePicker, TimePicker } from '../index';
import MaterialDatePicker from '../src/components/material/MaterialDatePicker';
import MaterialTimePicker from '../src/components/material/MaterialTimePicker';

const dateAkChange = action('AK Date changed');
const timeAkChange = action('AK Time changed');

const dateMuiChange = action('MUI Date changed');
const timeMuiChange = action('MUI Time changed');

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
                  onChange={dateAkChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <DatePicker
                  isDisabled
                  value="2019-01-01"
                  onChange={dateAkChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <DatePicker
                  value="2019-01-01"
                  onChange={dateAkChange} />
              <hr />
              <Label subtle>Controlled</Label>
              <DatePicker
                  value={selectedDate}
                  onChange={(value) => {
                    dateAkChange(value);
                    setSelectedDate(value);
                  }} />
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
              <MaterialDatePicker onChange={dateMuiChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <MaterialDatePicker
                  disabled
                  value="2019-01-01"
                  onChange={dateMuiChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <MaterialDatePicker
                  value="2019-01-01"
                  onChange={dateMuiChange} />
              <hr />
              <Label subtle>Controlled</Label>
              <MaterialDatePicker
                  value={selectedDate}
                  onChange={(value) => {
                    dateMuiChange(value);
                    setSelectedDate(value);
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
                  onChange={timeAkChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <TimePicker
                  isDisabled
                  onChange={timeAkChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <TimePicker
                  onChange={timeAkChange}
                  value="23:11" />
              <hr />
              <Label subtle>Controlled</Label>
              <TimePicker
                  onChange={(value) => {
                    timeAkChange(value);
                    setSelectedTime(value);
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
              <MaterialTimePicker onChange={timeMuiChange} />
              <hr />
              <Label subtle>Disabled</Label>
              <MaterialTimePicker
                  disabled
                  onChange={timeMuiChange} />
              <hr />
              <Label subtle>Provided Value</Label>
              <MaterialTimePicker
                  onChange={timeMuiChange}
                  value="23:11" />
              <hr />
              <Label subtle>Controlled</Label>
              <MaterialTimePicker
                  onChange={(value) => {
                    timeMuiChange(value);
                    setSelectedTime(value);
                  }}
                  value={selectedTime} />
            </CardSegment>
          </Card>
        </Grid>
      </div>
    );
  });
