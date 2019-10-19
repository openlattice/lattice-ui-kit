import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card, CardSegment, CardStack } from '../../layout';
import { DatePicker, TimePicker } from '../index';
import MaterialDatePicker from '../src/components/material/MaterialDatePicker';
import MaterialTimePicker from '../src/components/material/MaterialTimePicker';

const dateChange = action('Date changed');
const timeChange = action('Time changed');

storiesOf('Date and Time', module)
  .add('Date', () => (
    <div>
      <h1>
        Date Picker
      </h1>
      <CardStack>
        <Card>
          <CardSegment vertical padding="sm">
            <h3>Atlaskit</h3>
            <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
              Atlaskit Documentation
            </a>
            <DatePicker
                onChange={dateChange} />
          </CardSegment>
        </Card>
        <Card>
          <CardSegment vertical padding="sm">
            <h3>Material</h3>
            <MaterialDatePicker onChange={dateChange} />
          </CardSegment>
        </Card>
      </CardStack>
    </div>
  ))
  .add('Time', () => (
    <div>
      <h1>
        Time Picker
      </h1>
      <CardStack>
        <Card>
          <CardSegment vertical padding="sm">
            <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
              Atlaskit Documentation
            </a>
            <TimePicker
                onChange={timeChange} />
          </CardSegment>
        </Card>
        <Card>
          <CardSegment vertical padding="sm">
            <MaterialTimePicker onChange={timeChange} />
          </CardSegment>
        </Card>
      </CardStack>
    </div>
  ));
