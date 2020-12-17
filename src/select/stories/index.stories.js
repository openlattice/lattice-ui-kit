import React from 'react';

import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { action } from '@storybook/addon-actions';

import { REACT_SELECT_USAGE, paragraph, stateOptions } from './constants';

import { Card, CardSegment } from '../../layout';
import { genRealWordSelectOptions } from '../../utils/testing/MockUtils';
import { CheckboxSelect, Creatable, Select } from '../index';

const stressTestWordOptions = genRealWordSelectOptions(paragraph);

export default {
  title: 'Select',

  decorators: [
    (storyFn) => (
      <div>
        <a href="https://react-select.com/home">React-Select Documentation</a>
        <p>{REACT_SELECT_USAGE}</p>
        <Card>
          <CardSegment>{storyFn()}</CardSegment>
        </Card>
      </div>
    ),
  ],
};

export const DefaultSelect = () => (
  <>
    <h1>Select</h1>
    <Select options={stateOptions} onChange={action('Single select changed')} />
    <h1>Multiple Select</h1>
    <Select options={stateOptions} onChange={action('Multiple selection changed')} isMulti />
    <h1>Select (Stress Test)</h1>
    <Select options={stressTestWordOptions} />
  </>
);

export const UseRawValues = () => (
  <>
    <h1>Select</h1>
    <Select useRawValues options={stateOptions} onChange={action('Single select changed')} />
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
);

UseRawValues.story = {
  name: 'useRawValues',
};

export const CreatableSelect = () => (
  <>
    <h1>Creatable Select</h1>
    <Creatable options={stateOptions} onChange={action('Single creatable changed')} />
    <h1>Creatable Multiple Select</h1>
    <Creatable options={stateOptions} onChange={action('Multiple creatable changed')} isMulti />
    <h1>Creatable Multiple Input (hideMenu)</h1>
    <Creatable hideMenu isMulti options={stateOptions} onChange={action('Borderless changed')} />
  </>
);

export const _CheckboxSelect = () => (
  <>
    <h1>Checkbox Select</h1>
    <CheckboxSelect options={stateOptions} onChange={action('CheckboxSelect changed')} />
  </>
);

export const Appearances = () => (
  <>
    <h2>borderless</h2>
    <p>Default background-color is transparent</p>
    <Select borderless options={stateOptions} />
    <h2>invalid</h2>
    <p>border is red</p>
    <Select invalid options={stateOptions} />
    <h2>inputIcon</h2>
    <Select inputIcon={<FontAwesomeIcon icon={faSearch} fixedWidth />} options={stateOptions} />
    <h2>dropdownIcon</h2>
    <Select dropdownIcon={<FontAwesomeIcon icon={faSearch} fixedWidth />} options={stateOptions} />
    <h2>hideDropdownIcon</h2>
    <Select hideDropdownIcon options={stateOptions} />
  </>
);

export const DisabledOptions = () => (
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
);

DisabledOptions.story = {
  name: 'Disabled options',
};
