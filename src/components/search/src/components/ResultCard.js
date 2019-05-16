// @flow

import React from 'react';
import styled from 'styled-components';
import { List, Map } from 'immutable';

import Label from '../../../../label';
import { Card } from '../../../../layout';

const ResultGrid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(80px, 2fr) minmax(80px, 2fr) minmax(80px, 2fr) 1fr 1fr
  grid-gap: 20px 30px;

  > div:last-child {
    grid-column: 3 / -1;
  }
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

const Picture = styled.div`
  height: 100px;
  width: 100px;
  background-color: grey;
`;

const Truncated = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Props = {
  result ? :List<Map>;
}

const ResultCard = ({ result } :Props) => {
  return (
    <Card>
      <ResultWrapper>
        <Picture />
        <ResultDetails>
          <ResultGrid>
            { result
              && result.map((detail :Map, index :number) => (
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
};

ResultCard.defaultProps = {
  result: List()
};

export default ResultCard;
