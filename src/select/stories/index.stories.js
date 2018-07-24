import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select, Creatable } from '../../select';
import { stateOptions } from './storyConsts';

storiesOf('Select', module)
  .add('Default Select', () => (
    <div>
      <h1>Select</h1>
      <a href="https://react-select.com/home">React-Select Documentation</a>
      <Select
          options={stateOptions}
          onChange={action('Single select changed')}
          />
      <h1>Multiple Select</h1>
      <Select
          options={stateOptions}
          onChange={action('Multiple selection changed')}
          isMulti
          />
    </div>
  ))
  .add('Creatable Select', () => (
    <div>
      <h1>Creatable Select</h1>
      <a href="https://react-select.com/home">React-Select Documentation</a>
      <Creatable
          options={stateOptions}
          onChange={action('Single creatable changed')}
          />
      <h1>Creatable Multiple Select</h1>
      <Creatable
          options={stateOptions}
          onChange={action('Multiple creatable changed')}
          isMulti
          />
    </div>
  ));

