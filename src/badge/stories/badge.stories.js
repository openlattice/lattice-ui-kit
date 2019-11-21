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
          <Badge count="5" />
          <Badge mode="primary" count="25" />
          <Badge mode="secondary" count="150" />
          <Badge mode="subtle" count="25" />
        </CardSegment>
        <CardSegment>
          <Badge mode="primary" max="100" count="456" />
          <Badge mode="primary" count="4560" />
        </CardSegment>
      </Card>
    </>
  ));
