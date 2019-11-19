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
          <Badge mode="secondary" count="10" />
          <Badge mode="subtle" count="25" />
          <Badge mode="added" count="+34" />
          <Badge mode="removed" count="-34" />
        </CardSegment>
        <CardSegment>
          <Badge mode="primary" max="100" count="456" />
        </CardSegment>
      </Card>
    </>
  ));
