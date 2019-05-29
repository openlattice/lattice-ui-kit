// @flow
import React, { Component } from 'react';
import { Map } from 'immutable';
import { ResultGrid, Truncated } from './styled/StyledResultComponents';
import Label from '../../../../label';

type Props = {
  result :Map;
  resultLabels ? :Map;
  resultColumns ? :number;
};

class ResultData extends Component<Props> {

  static defaultProps = {
    resultLabels: Map(),
    resultColumns: 4
  }

  transformResultToDetailsList = () => {
    const { result, resultLabels } = this.props;
    const labels = result.map((value :any, key :string) => {
      let label = key;

      if (resultLabels && Map.isMap(resultLabels)) {
        label = resultLabels.get(key, key);
      }

      return Map({
        key,
        label,
        value,
      });
    });
    return labels.toList();
  }

  render() {
    const { resultColumns } = this.props;
    const details = this.transformResultToDetailsList();

    return (
      <ResultGrid columns={resultColumns}>
        { details
          && details.map((detail :Map, index :number) => (
            <div key={index.toString()}>
              <Label bold>
                {detail.get('label', '')}
              </Label>
              <Truncated>
                {detail.get('value', '')}
              </Truncated>
            </div>
          ))
        }
      </ResultGrid>
    );
  }
}

export default ResultData;
