import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import Tag from '..';

storiesOf('Tag', module)
  .add('default', () => (
    <>
      <h1>Tags</h1>
      <Card>
        <CardSegment vertical={false}>
          <Tag>undefined</Tag>
          <Tag mode="neutral">neutral</Tag>
          <Tag mode="success">success</Tag>
          <Tag mode="danger">danger</Tag>
          <Tag mode="warning">warning</Tag>
          <Tag mode="primary">primary</Tag>
          <Tag mode="secondary">secondary</Tag>
        </CardSegment>
      </Card>
    </>
  ));
