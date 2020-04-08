// @flow

import React, { Component } from 'react';
import type { ComponentType, Node } from 'react';

import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import { List, Map } from 'immutable';

import IconSplash from './IconSplash';
import Result from './Result';
import type { ResultProps } from './Result';

import Spinner from '../../../../spinner';
import { CardStack } from '../../../../layout';

type Props = {
  className ? :string;
  hasSearched ? :boolean;
  isLoading ? :boolean;
  noResults ? :ComponentType<any>;
  onResultClick ? :(result :Map) => void;
  resultComponent ? :ComponentType<ResultProps>;
  resultLabels ? :Map;
  results :List<Map>;
};

class SearchResults extends Component<Props> {

  static defaultProps = {
    className: undefined,
    hasSearched: false,
    isLoading: false,
    noResults: () => (<IconSplash icon={faSearchMinus} caption="No results" />),
    onResultClick: undefined,
    resultComponent: Result,
    resultLabels: undefined,
  }

  renderResults = () :Node => {
    const {
      hasSearched,
      isLoading,
      noResults: NoResults,
      onResultClick,
      resultComponent: ResultComponent,
      resultLabels,
      results,
    } = this.props;

    if (isLoading) return <Spinner />;

    if (List.isList(results) && results.count() && ResultComponent) {
      return results.map((result :Map, index :number) => (
        <ResultComponent
            key={index.toString()}
            onClick={onResultClick}
            result={result}
            index={index}
            resultLabels={resultLabels} />
      ));
    }

    if (hasSearched && NoResults) {
      return <NoResults />;
    }

    return null;
  }

  render() {
    const { className } = this.props;
    return (
      <CardStack className={className}>
        { this.renderResults() }
      </CardStack>
    );
  }
}

export default SearchResults;
export type { Props as SearchResultsProps };
