import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../../select';
import { stateOptions } from './storyConsts';

storiesOf('Select', module)
  .add('Single Select', () => (
    <div>
      <h1>Select</h1>
      <Select
          options={stateOptions}
          onChange={action('Single select changed')}
          />
    </div>
  ))
  .add('Multiple Select', () => (
    <div>
      <h1>Select Multiple</h1>
      <Select
          options={stateOptions}
          onChange={action('Multiple selection changed')}
          isMulti
          />
    </div>
  ));

