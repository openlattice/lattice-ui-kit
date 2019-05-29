// @flow

import React, { Component } from 'react';
import isFunction from 'lodash/isFunction';
import { Map } from 'immutable';

import ResultData from './ResultData';
import { Card } from '../../../../layout';
import {
  ResultDetails,
  ResultWrapper,
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

  handleClick = () => {
    const { onClick, result } = this.props;
    if (isFunction(onClick)) {
      onClick(result);
    }
  }

  render() {
    const {
      className,
      result,
      resultColumns,
      resultLabels,
    } = this.props;

    return (
      <Card className={className} onClick={this.handleClick}>
        <ResultWrapper>
          <ResultDetails>
            <ResultData
                resultColumns={resultColumns}
                result={result}
                resultLabels={resultLabels} />
          </ResultDetails>
        </ResultWrapper>
      </Card>
    );
  }
}

export default Result;
export type { Props as ResultProps };
