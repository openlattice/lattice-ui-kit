// @flow

import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';
import {
  ResultDetails,
  ResultGrid,
  ResultWrapper,
  Truncated
} from './styled/StyledResultComponents';

type Props = {
  className ? :string;
  result :Map;
  resultColumns ? :number;
  resultLabels ? :Map;
  onClick ? :(result :Map) => void;
}

class Result extends Component<Props> {

  static defaultProps = {
    className: undefined,
    onClick: undefined,
    resultColumns: 4,
    resultLabels: Map(),
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

  handleClick = () => {
    const { onClick, result } = this.props;
    if (isFunction(onClick)) {
      onClick(result);
    }
  }

  render() {
    const {
      className,
      resultColumns
    } = this.props;
    const details :List<Map> = this.transformResultToDetailsList();

    return (
      <Card className={className} onClick={this.handleClick}>
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
