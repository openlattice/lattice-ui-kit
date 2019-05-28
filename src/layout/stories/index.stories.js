import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card, CardSegment, CardStack } from '../index';

storiesOf('Card', module)
  .add('default', () => (
    <>
      <Card>Blank Card</Card>
      <br />
      <Card>
        <CardSegment>
          With segment
        </CardSegment>
      </Card>
      <br />
      <Card onClick={action('clicked on card')}>
        <CardSegment>
          With segment and onClick
        </CardSegment>
      </Card>
    </>
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
