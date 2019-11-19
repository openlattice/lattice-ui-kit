import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import Badge from '..';

storiesOf('Badge', module)
  .add('default', () => (
    <>
      <h1>Badges</h1>
      <Card>
        <CardSegment>
          <Badge>5</Badge>
          <Badge mode="primary">25</Badge>
          <Badge mode="secondary">10</Badge>
          <Badge mode="subtle">25</Badge>
          <Badge mode="added">+100</Badge>
          <Badge mode="removed">-99</Badge>
        </CardSegment>
        <CardSegment>
          <Badge mode="primary" max="100" />
        </CardSegment>
      </Card>
    </>
  ));
