import React from 'react';

import {
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from '../index';

export default {
  title: 'CardHeader',
  component: CardHeader
};

export const Default = () => {
  const modes = [
    'Mode not specified',
    'danger',
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
  ];
  return (
    <CardStack>
      {modes.map((mode) => (
        <Card key={mode}>
          <CardHeader mode={mode} padding="sm">
            {mode}
          </CardHeader>
          <CardSegment>Body</CardSegment>
        </Card>
      ))}
    </CardStack>
  );
};
