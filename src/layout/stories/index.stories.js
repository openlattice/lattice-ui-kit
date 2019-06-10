import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../button';
import {
  Card,
  CardSegment,
  CardStack
} from '../index';
import { PURPLES, WHITE } from '../../colors';

storiesOf('Layout', module)
  .add('Card', () => (
    <CardStack>
      <Card>Blank Card</Card>
      <Card>
        <CardSegment>
          With segment
        </CardSegment>
      </Card>
      <Card onClick={action('clicked on card')}>
        <CardSegment>
          With segment and onClick
        </CardSegment>
      </Card>
    </CardStack>
  ))
  .add('CardSegment', () => (
    <CardStack>
      <Card>
        <CardSegment>
          Basic
        </CardSegment>
      </Card>

      <Card>
        <CardSegment>
          <Button mode="primary">default</Button>
          <Button mode="secondary">flex</Button>
          <Button>row</Button>
        </CardSegment>
      </Card>

      <Card>
        <CardSegment vertical>
          <Button mode="primary">vertical</Button>
          <Button mode="secondary">card</Button>
          <Button>segment</Button>
        </CardSegment>
      </Card>

      <Card>
        <CardSegment bgColor={PURPLES[2]}>bgColor</CardSegment>
        <CardSegment bgColor={PURPLES[3]}>bgColor</CardSegment>
        <CardSegment bgColor={PURPLES[4]}>bgColor</CardSegment>
      </Card>
    </CardStack>
  ))
  .add('Card Stack', () => (
    <CardStack>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
      <Card>
        <CardSegment>
          Stack of cards with segment
        </CardSegment>
      </Card>
    </CardStack>
  ));
