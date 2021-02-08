// @flow
import { Component } from 'react';
import { List, Map } from 'immutable';

import { Search } from '../..';
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
            resultLabels={{
              reportType: 'Report type',
              badges: 'Badges',
              submitter: 'Submitter'
            }}
            filterFields={mockFilterFields}
            hasSearched={fetchState !== 'STANDBY'}
            isLoading={fetchState === 'PENDING'}
            onSearch={this.handleOnSearch}
            searchResults={results}
            title="Fake Report Search" />
      </>
    );
  }
}

export default SearchContainer;
