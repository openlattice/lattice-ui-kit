import React from 'react';

import { Card, CardSegment } from '../../layout';
import Tag from '..';

export default {
  title: 'Tag',
};

export const Default = () => (
  <>
    <h1>Tags</h1>
    <Card>
      <CardSegment vertical={false}>
        <Tag>undefined</Tag>
        <Tag mode="danger">danger</Tag>
        <Tag mode="neutral">neutral</Tag>
        <Tag mode="info">info</Tag>
        <Tag mode="primary">primary</Tag>
        <Tag mode="secondary">secondary</Tag>
        <Tag mode="success">success</Tag>
        <Tag mode="warning">warning</Tag>
      </CardSegment>
    </Card>
  </>
);

Default.story = {
  name: 'default',
};
