// @flow

import React, { Component } from 'react';
import { List } from 'immutable';

import ResultCard from './ResultCard';
import { Card, CardStack } from '../../../../layout';

type Props = {
  results :List<List>;
  fetchState :any;
};

class SearchResultsContainer extends Component<Props> {
  renderResults = () => {
    const { results } = this.props;
    if (List.isList(results) && results.count()) {
      return results.map((result :List, index :number) => <ResultCard key={index.toString()} result={result} />);
    }

    return <Card>no results</Card>;
  }

  render() {
    return (
      <CardStack>
        { this.renderResults() }
      </CardStack>
    );
  }
}

export default SearchResultsContainer;
export type {
  Props as SearchResultsProps
};
