import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('button clicked')}>Hello Button</Button>
  ));
