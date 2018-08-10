import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '..';

storiesOf('Button', module)
  .add('basic button', () => (
    <Fragment>
      <Button onClick={action('button clicked')}>
        Default button
      </Button>
      <br />
      <br />
      <Button onClick={action('button clicked')} mode="secondary">
        Secondary button
      </Button>
      <br />
      <br />
      <Button mode="primary">
        Primary button
      </Button>
    </Fragment>
  ));
