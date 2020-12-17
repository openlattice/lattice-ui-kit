/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Map } from 'immutable';
import { action } from '@storybook/addon-actions';

import SearchContainer from './components/SearchContainer';
import Search from '../src/components/Search';
import Result from '../src/components/Result';
import SearchResults from '../src/components/SearchResults';
import {
  mockFilterFields,
  mockResultLabels,
  mockSearchResultsForPeople,
  mockSearchResultsForReports,
} from '../src/components/constants';

export default {
  title: 'Search',
};

export const DefaultSearchFields = () => (
  <>
    <h1>Search Fields</h1>
    <Search onSearch={action('search clicked')} />
  </>
);

DefaultSearchFields.story = {
  name: 'Default Search fields',
};

export const SearchFieldsWithFilter = () => (
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
          submitter: 'Submitter',
        })}
        resultColumns={3} />
  </>
);

SearchFieldsWithFilter.story = {
  name: 'Search fields with filter',
};

export const SearchFieldsWithResults = () => (
  <>
    <h1>Search Fields</h1>
    <Search
        title="Search"
        onSearch={action('search clicked')}
        searchResults={mockSearchResultsForPeople} />
  </>
);

SearchFieldsWithResults.story = {
  name: 'Search fields with results',
};

export const SearchWithCustomSearchResultsComponent = () => (
  <>
    <h1>Search Fields</h1>
    <Search
        title="Search"
        onSearch={action('search clicked')}
        searchResults={mockSearchResultsForPeople}
        searchResultsComponent={(props) => (
          <SearchResults {...props} resultLabels={mockResultLabels} />
        )} />
  </>
);

SearchWithCustomSearchResultsComponent.story = {
  name: 'Search with custom searchResultsComponent',
};

export const SearchWithCustomResultComponent = () => (
  <>
    <h1>Search Fields</h1>
    <Search
        title="Search"
        onSearch={action('search clicked')}
        searchResults={mockSearchResultsForPeople}
        resultComponent={(props) => <Result {...props} onClick={action('Result clicked')} />} />
  </>
);

SearchWithCustomResultComponent.story = {
  name: 'Search with custom resultComponent',
};

export const _SearchContainer = () => (
  <>
    <h1>Search Fields</h1>
    <SearchContainer />
  </>
);
