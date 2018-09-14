import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { DatePicker, TimePicker } from '../index';

storiesOf('Date and Time', module)
  .add('Date', () => (
    <div>
      <h1>
        Date Picker
      </h1>
      <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
        Atlaskit Documentation
      </a>
      <DatePicker
          onChange={action('Date changed')} />
    </div>
  ))
  .add('Time', () => (
    <div>
      <h1>
        Time Picker
      </h1>
      <a href="https://atlaskit.atlassian.com/packages/core/datetime-picker">
        Atlaskit Documentation
      </a>
      <TimePicker
          onChange={action('Time changed')} />
    </div>
  ));
