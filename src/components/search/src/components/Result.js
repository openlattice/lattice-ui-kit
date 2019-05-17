// @flow

import * as React from 'react';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';
import {
  ResultGrid,
  ResultWrapper,
  ResultDetails,
  Truncated
} from './styled/StyledResultComponents';

type Props = {
  className ? :string;
  result ? :Map;
  resultColumns ? :number;
  resultLabels ? :Map;
}

class Result extends React.Component<Props> {

  static defaultProps = {
    className: undefined,
    result: Map(),
    resultColumns: 4,
    resultLabels: Map()
  }

  transformResultToDetailsList = (result :Map) => {

    const { resultLabels } = this.props;
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
    const {
      className,
      result,
      resultColumns
    } = this.props;
    const details :List<Map> = this.transformResultToDetailsList(result);

    return (
      <Card className={className}>
        <ResultWrapper>
          <ResultDetails>
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
          </ResultDetails>
        </ResultWrapper>
      </Card>
    );
  }
}

export default Result;
export type { Props as ResultProps };
