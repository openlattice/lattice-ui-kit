import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../button';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={action('button clicked')}>Default</Button>
        <Button primary onClick={action('button clicked')}>Primary</Button>
        <Button secondary onClick={action('button clicked')}>Secondary</Button>
        <Button warning onClick={action('button clicked')}>Warning</Button>
        <Button error onClick={action('button clicked')}>Error</Button>
        <Button disabled onClick={action('button clicked')}>Disabled</Button>
      </div>
    </ThemeProvider>
  ));
