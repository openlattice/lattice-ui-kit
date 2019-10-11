import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNarwhal } from '@fortawesome/pro-regular-svg-icons';

import { Select, Creatable, CheckboxSelect } from '../index';
import { stateOptions, stressTestOptions, REACT_SELECT_USAGE } from './constants';

const customIcon = () => <FontAwesomeIcon icon={faNarwhal} spin />;

storiesOf('Select', module)
  .addDecorator((storyFn) => (
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
      <h1>Select (Stress Test)</h1>
      <Select
          options={stressTestOptions} />
    </>
  ))
  .add('useRawValues', () => (
    <>
      <h1>Select</h1>
      <Select
          useRawValues
          options={stateOptions}
          onChange={action('Single select changed')} />
      <h1>Multiple Select</h1>
      <Select
          useRawValues
          options={stateOptions}
          onChange={action('Multiple selection changed')}
          isMulti />
      <h1>Creatable Multiple Input (hideMenu)</h1>
      <Creatable
          hideMenu
          isMulti
          useRawValues
          options={stateOptions}
          onChange={action('Borderless changed')} />
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
  .add('Checkbox Select', () => (
    <>
      <h1>Checkbox Select</h1>
      <CheckboxSelect
          options={stateOptions}
          onChange={action('CheckboxSelect changed')} />
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
  ))
  .add('custom dropdown indicator', () => (
    <>
      <h1>Custom Dropdown Indicator</h1>
      <h2>FontAwesome IconDefinition</h2>
      <Select
          icon={faNarwhal}
          options={stateOptions}
          onChange={action('Single select changed')} />
      <h2>Custom Icon</h2>
      <Select
          icon={customIcon}
          useRawValues
          options={stateOptions}
          onChange={action('Single select changed')} />
    </>
  ))
  .add('Disabled options', () => (
    <>
      <h1>Disabled options</h1>
      <h2>Checkbox Select</h2>
      <CheckboxSelect
          isOptionDisabled={(option) => option.value === 'AL'}
          options={stateOptions}
          onChange={action('CheckboxSelect changed')} />
      <h2>Select</h2>
      <Select
          isOptionDisabled={(option) => option.value === 'AL'}
          options={stateOptions}
          onChange={action('Single select changed')} />
    </>
  ));
