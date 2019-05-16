// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';

const ResultGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, minmax(80px, 1fr));
  /* minmax(80px, 2fr) minmax(80px, 2fr) minmax(80px, 2fr) 1fr 1fr */
  grid-gap: 20px 30px;

  /* > div:last-child {
    grid-column: 3 / -1;
  } */
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

// const Picture = styled.div`
//   height: 100px;
//   width: 100px;
//   background-color: grey;
// `;

const Truncated = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  result ? :Map;
  resultLabels ? :Map;
}

class Result extends Component<Props> {

  static defaultProps = {
    result: List(),
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
        label,
        value,
        key
      });
    });
    return labels.toList();
  }

  render() {
    const { result } = this.props;
    const details :List<Map> = this.transformResultToDetailsList(result);

    return (
      <Card>
        <ResultWrapper>
          <ResultDetails>
            <ResultGrid>
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
