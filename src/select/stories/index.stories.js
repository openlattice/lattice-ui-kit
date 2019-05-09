import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select, Creatable } from '../index';
import { stateOptions, REACT_SELECT_USAGE } from './constants';

storiesOf('Select', module)
  .addDecorator(storyFn => (
    <div>
      <a href="https://react-select.com/home">
        React-Select Documentation
      </a>
      <p>
        { REACT_SELECT_USAGE }
      </p>
      { storyFn() }
    </div>
  ))
  .add('Default Select', () => (
    <>
      <h1>Select</h1>
      <Select
          options={stateOptions}
          onChange={action('Single select changed')} />
      <h1>Multiple Select</h1>
      <Select
          options={stateOptions}
          onChange={action('Multiple selection changed')}
          isMulti />
    </>
  ))
  .add('Creatable Select', () => (
    <>
      <h1>Creatable Select</h1>
      <Creatable
          options={stateOptions}
          onChange={action('Single creatable changed')} />
      <h1>Creatable Multiple Select</h1>
      <Creatable
          options={stateOptions}
          onChange={action('Multiple creatable changed')}
          isMulti />
      <h1>Creatable Multiple Input (hideMenu)</h1>
      <Creatable
          hideMenu
          isMulti
          options={stateOptions}
          onChange={action('Borderless changed')} />
    </>
  ))
  .add('Appearances', () => (
    <>
      <h1>borderless</h1>
      <p>Default background-color is transparent</p>
      <Select
          borderless
          options={stateOptions}
          onChange={action('Borderless changed')} />
    </>
  ));
