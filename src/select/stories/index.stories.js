import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../../select';
import { stateOptions } from './storyConsts';


storiesOf('Select', module)
  .add('with text', () => (
    <div>
      <h1>Select</h1>
      <Select
          options={stateOptions}
          onChange={action()}
          />
    </div>
  ));
