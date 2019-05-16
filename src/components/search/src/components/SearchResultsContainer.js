// @flow

import React, { Component } from 'react';
import { List, Map } from 'immutable';

import ResultCard from './ResultCard';
import { Card, CardStack } from '../../../../layout';

type Props = {
  results :List<Map>;
  resultLabels ? :Map;
  resultComponent :any;
};

class SearchResultsContainer extends Component<Props> {

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
    })
  }

  transformResultToDetailsObject = (result :Map) => {
    const { resultLabels } = this.props;
    const labels = result.map((value :any, key :string) => {
      let label = key;

      if (resultLabels && Map.isMap(resultLabels)) {
        label = resultLabels.get(key, key);
      }

      return Map({
        label,
        value,
        key
      });
    });
    return labels.toList();
  }

  renderResults = () => {
    const { results, resultLabels } = this.props;
    if (List.isList(results) && results.count()) {
      return results.map((result :Map, index :number) => (
        <ResultCard key={index.toString()} result={result} resultLabels={resultLabels} />
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

export default SearchResultsContainer;
export type {
  Props as SearchResultsProps
};
