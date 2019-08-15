// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';
import {
  ResultGrid,
  ResultWrapper,
  ResultDetails,
  Truncated
} from './styled/StyledResultComponents';

const StyledResultGrid = styled(ResultGrid)`
  grid-template-columns: minmax(80px, 2fr) minmax(80px, 2fr) minmax(80px, 2fr) 1fr 1fr;

  > div:last-child {
    grid-column: 3 / -1;
  }
`;

type Props = {
  result ? :Map;
  resultLabels ? :Map;
}

class PersonResult extends Component<Props> {

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
            <StyledResultGrid>
              {
                details && details.map((detail :Map, index :number) => (
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
            </StyledResultGrid>
          </ResultDetails>
        </ResultWrapper>
      </Card>
    );
  }
}

export default PersonResult;
export type { Props as ResultProps };
