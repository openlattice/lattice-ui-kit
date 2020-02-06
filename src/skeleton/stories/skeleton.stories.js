import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Skeleton from '../index';
import { Card, CardHeader, CardSegment } from '../../layout';

const Row = styled.div`
  display: flex;
  flex: 1 1 100%;
  align-items: ${(props) => (props.align ? props.align : null)};
  > *:not(:first-child) {
    flex: 1;
    margin-left: 10px;
  }
`;

storiesOf('Skeleton', module)
  .addDecorator((storyFn) => (
    <div>
      <a href="https://material-ui.com/components/skeleton/#skeleton">https://material-ui.com/components/skeleton/#skeleton</a>
      <p>This forwards the Skeleton component from Material-Ui.</p>
      {storyFn()}
    </div>
  ))
  .add('Default animation (pulse)', () => (
    <Card>
      <CardHeader padding="sm">
        <Row align="center">
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton height={27} width="40%" />
        </Row>
      </CardHeader>
      <CardSegment vertical padding="sm">
        <Row>
          <Skeleton variant="rect" width={210} height={118} />
          <div>
            <Skeleton />
            <Skeleton width="95%" />
            <Skeleton width="97%" />
            <Skeleton width="95%" />
            <Skeleton width="55%" />
          </div>
        </Row>
      </CardSegment>
    </Card>
  ));
