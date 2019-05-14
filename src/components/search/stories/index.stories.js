import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../src/components/Search';

const filterFields = [
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
    },
    id: 'report-type',
    label: 'Report type',
    options: ['Crisis Template', 'Follow-up'],
  },
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
    },
    id: 'badges',
    label: 'Badges',
    options: ['Officer Safety', 'Substance use'],
  },
  {
    filter: (searchResult, filter) => {
      if (filter.value === 'All') return true;
      return searchResult.getIn([filter.id, 0]) === filter.value;
    },
    id: 'submitter',
    label: 'Submitter',
    options: ['solomon@openlattice.com', 'smitty@werbenjagermanjensen.com', 'smitty@werbenjag1ermanjensen.com', 'smitty@werbenjage2rmanjensen.com', 'smitty@werbenjagermanje3nsen.com', 'smitty@werbenjagerma4njensen.com'],
  },
];

storiesOf('Search', module)
  .add('Default Search fields', () => (
    <>
      <h1>Search Fields</h1>
      <Search onSearch={action('search clicked')} />
    </>
  ))
  .add('Search fields with filter', () => (
    <>
      <h1>Search Fields</h1>
      <Search
          filterFields={filterFields}
          onSearch={action('search clicked')} />
    </>
  ));
