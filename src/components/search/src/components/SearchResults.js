// @flow

import * as React from 'react';
import { List, Map } from 'immutable';

import Result from './Result';
import { Card, CardStack } from '../../../../layout';
import type { ResultProps } from './Result';

type Props = {
  results :List<Map>;
  resultLabels ? :Map;
  resultComponent ? :React.ComponentType<ResultProps>;
};

class SearchResults extends React.Component<Props> {

  static defaultProps = {
    resultLabels: Map({
      lastName: 'Last name',
      firstName: 'First name',
      middleName: 'Middle name',
      sex: 'Sex',
      gender: 'Gender',
      ethnicity: 'Ethnicity',
      dob: 'DOB',
      identifier: 'Identifier',
    }),
    resultComponent: Result,
  }

  renderResults = () :React.Node => {
    const {
      resultComponent: ResultComponent,
      resultLabels,
      results,
      ...rest
    } = this.props;
    if (List.isList(results) && results.count() && ResultComponent) {
      return results.map((result :Map, index :number) => (
        <ResultComponent
            key={index.toString()}
            result={result}
            resultLabels={resultLabels}
            {...rest} />
      ));
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

export default SearchResults;
export type {
  Props as SearchResultsProps
};
