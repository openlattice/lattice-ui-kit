// @flow
import React, { Component } from 'react';
import { List, Map } from 'immutable';

import { Search } from '../..';
import NotFound from '../../src/components/NotFound';
import { mockSearchResultsForReports, mockFilterFields } from '../../src/components/constants';

type Props = {

};

type State = {
  fetchState :string;
  results :List<Map>
};

class SearchContainer extends Component<Props, State> {

  state = {
    fetchState: 'STANDBY',
    results: List()
  }

  handleOnSearch = () => {
    this.setState({
      fetchState: 'PENDING',
    });

    setTimeout(() => {
      this.setState({
        fetchState: 'SUCCESS',
        results: mockSearchResultsForReports
      });
    }, 2000);
  }

  renderNoResults = () => {
    const { fetchState, results } = this.state;
    if (fetchState === 'SUCCESS' && !results.count()) {
      return <NotFound caption="No results found" />;
    }

    return null;
  }

  render() {
    const { fetchState, results } = this.state;
    return (
      <>
        <Search
            searchFields={[
              {
                id: 'dateStart',
                label: 'Date Start',
                type: 'date'
              },
              {
                id: 'dateEnd',
                label: 'Date End',
                type: 'date'
              }
            ]}
            filterFields={mockFilterFields}
            isLoading={fetchState === 'PENDING'}
            onSearch={this.handleOnSearch}
            searchResults={results}
            title="Fake Report Search" />
        { this.renderNoResults() }
      </>
    );
  }
}

export default SearchContainer;
