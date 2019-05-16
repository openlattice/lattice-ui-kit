import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../src/components/Search';
import {
  mockFilterFields,
  mockSearchResultsForPeople,
  mockSearchResultsForReports
} from '../src/components/constants';

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
          title="Search"
          filterFields={mockFilterFields}
          onSearch={action('search clicked')} />
    </>
  ))
  .add('Search fields with results', () => (
    <>
      <h1>Search Fields</h1>
      <Search
          title="Search"
          // filterFields={mockFilterFields}
          onSearch={action('search clicked')}
          searchResults={mockSearchResultsForPeople} />
    </>
  ));
