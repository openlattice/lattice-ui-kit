// @flow

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';

const ResultGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: ${props => props.columns && css`repeat(${props.columns}, minmax(80px, 1fr))`};
  grid-gap: 20px 30px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const ResultDetails = styled.div`
  padding: 10px 30px;
  flex: 1;
`;

const Truncated = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  result ? :Map;
  resultLabels ? :Map;
  resultColumns ? :number;
}

class Result extends Component<Props> {

  static defaultProps = {
    result: List(),
    resultLabels: Map(),
    resultColumns: 4,
  }

  transformResultToDetailsList = (result :Map) => {
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

  render() {
    const { result, resultColumns } = this.props;
    const details :List<Map> = this.transformResultToDetailsList(result);

    return (
      <Card>
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
