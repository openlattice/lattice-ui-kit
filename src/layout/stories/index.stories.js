import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../button';
import {
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from '../index';
import { PURPLES } from '../../colors';

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
  .add('CardHeader', () => {
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
        { modes.map((mode) => (
          <Card key={mode}>
            <CardHeader mode={mode} padding="sm">
              {mode}
            </CardHeader>
            <CardSegment>
              Body
            </CardSegment>
          </Card>
        )) }
      </CardStack>
    );
  })
  .add('CardSegment', () => (
    <CardStack>
      <Card>
        <CardSegment>Segment 1</CardSegment>
        <CardSegment>Segment 2</CardSegment>
        <CardSegment>Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment noBleed>Segment 1</CardSegment>
        <CardSegment noBleed>Segment 2</CardSegment>
        <CardSegment noBleed>Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment indent={4}>Indented Segment 1</CardSegment>
        <CardSegment indent={12}>Indented Segment 2</CardSegment>
        <CardSegment indent={24}>Indented Segment 3</CardSegment>
      </Card>

      <Card>
        <CardSegment indent={4} noBleed>Indented Segment 1</CardSegment>
        <CardSegment indent={12} noBleed>Indented Segment 2</CardSegment>
        <CardSegment indent={24} noBleed>Indented Segment 3</CardSegment>
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
