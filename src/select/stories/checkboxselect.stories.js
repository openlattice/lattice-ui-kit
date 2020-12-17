import React from 'react';

import { action } from '@storybook/addon-actions';

import { REACT_SELECT_USAGE, stateOptions } from './constants';

import { Card, CardSegment } from '../../layout';
import { CheckboxSelect } from '../index';

export default {
  title: 'CheckboxSelect',
  component: CheckboxSelect,

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

export const Default = () => (
  <>
    <h1>Checkbox Select</h1>
    <CheckboxSelect options={stateOptions} onChange={action('CheckboxSelect changed')} />
  </>
);
