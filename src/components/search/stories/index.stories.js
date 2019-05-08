import React from 'react';
import { storiesOf } from '@storybook/react';

import Search from '../src/components/Search';

const searchFields = [
  {
    id: 'search-firstname',
    label: 'First Name'
  },
  {
    id: 'search-lastname',
    label: 'Last Name'
  },
  {
    id: 'search-dob',
    label: 'Date of Birth',
    type: 'date'
  },
];

storiesOf('Search', module)
  .add('Search fields', () => (
    <>
      <h1>Search Fields</h1>
      <Search searchFields={searchFields} />
    </>
  ));
