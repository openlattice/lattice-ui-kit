import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Date and Time', module)
  .add('Date', () => (
    <div>
      <h1>
        Input (Stateless)
      </h1>
      <Input />
    </div>
  ));
