import React from 'react';
import { Map } from 'immutable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../src/components/Search';
import PersonResult from '../src/components/PersonResult';
import SearchResults from '../src/components/SearchResults';
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
          onSearch={action('search clicked')}
          searchResults={mockSearchResultsForReports}
          resultLabels={Map({
            reportType: 'Report type',
            badges: 'banana',
            submitter: 'Submitter'
          })}
          resultColumns={3} />
    </>
  ))
  .add('Search fields with results', () => (
    <>
      <h1>Search Fields</h1>
      <Search
          title="Search"
          onSearch={action('search clicked')}
          searchResults={mockSearchResultsForPeople} />
    </>
  ))
  .add('Search with custom searchResultsComponent', () => (
    <>
      <h1>Search Fields</h1>
      <Search
          title="Search"
          onSearch={action('search clicked')}
          searchResults={mockSearchResultsForPeople}
          searchResultsComponent={props => <SearchResults {...props} resultLabels={Map({ lastName: 'Banana' })} />} />
    </>
  ))
  .add('Search with custom resultComponent', () => (
    <>
      <h1>Search Fields</h1>
      <Search
          title="Search"
          onSearch={action('search clicked')}
          searchResults={mockSearchResultsForPeople}
          resultComponent={PersonResult} />
    </>
  ));
