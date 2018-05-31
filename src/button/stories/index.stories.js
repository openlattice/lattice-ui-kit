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
        <h1>Enabled</h1>
        <Button onClick={action('button clicked')}>Default</Button>
        <Button primary onClick={action('button clicked')}>Primary</Button>
        <Button secondary onClick={action('button clicked')}>Secondary</Button>
        <Button warning onClick={action('button clicked')}>Warning</Button>
        <Button error onClick={action('button clicked')}>Error</Button>
        <hr />
        <h1>Disabled</h1>
        <Button disabled onClick={action('button clicked')}>Default</Button>
        <Button primary disabled onClick={action('button clicked')}>Primary</Button>
        <Button secondary disabled onClick={action('button clicked')}>Secondary</Button>
        <Button warning disabled onClick={action('button clicked')}>Warning</Button>
        <Button error disabled onClick={action('button clicked')}>Error</Button>
      </div>
    </ThemeProvider>
  ));
