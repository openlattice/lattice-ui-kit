import React from 'react';

import { action } from '@storybook/addon-actions';

import {
  Card,
  CardSegment,
  CardStack
} from '../index';

export default {
  title: 'Card',
};

export const Default = () => (
  <CardStack>
    <Card>Blank Card</Card>
    <Card>
      <CardSegment>With segment</CardSegment>
    </Card>
    <Card onClick={action('clicked on card')}>
      <CardSegment>With segment and onClick</CardSegment>
    </Card>
  </CardStack>
);
