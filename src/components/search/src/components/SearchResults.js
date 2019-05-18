// @flow

import * as React from 'react';
import { List, Map } from 'immutable';

import Result from './Result';
import { CardStack } from '../../../../layout';
import NotFound from './NotFound';
import type { ResultProps } from './Result';

type Props = {
  results :List<Map>;
  resultLabels ? :Map;
  resultComponent ? :React.ComponentType<ResultProps>;
  className ? :string;
  onResultClick ? :(result :Map) => void;
};

class SearchResults extends React.Component<Props> {

  static defaultProps = {
    className: undefined,
    onResultClick: undefined,
    resultComponent: Result,
    resultLabels: Map(),
  }

  renderResults = () :React.Node => {
    const {
      onResultClick,
      resultComponent: ResultComponent,
      resultLabels,
      results,
    } = this.props;
    if (List.isList(results) && results.count() && ResultComponent) {
      return results.map((result :Map, index :number) => (
        <ResultComponent
            key={index.toString()}
            onClick={onResultClick}
            result={result}
            resultLabels={resultLabels} />
      ));
    }

    return <NotFound caption="No results found" />;
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
