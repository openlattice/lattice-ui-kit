import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Enabled</h1>
        <Button onClick={action('button clicked')}>Default</Button>
        <Button mode="primary" onClick={action('button clicked')}>Primary</Button>
        <Button mode="secondary" onClick={action('button clicked')}>Secondary</Button>
        <hr />
        <h1>Disabled</h1>
        <Button disabled onClick={action('button clicked')}>Default</Button>
        <Button mode="primary" disabled onClick={action('button clicked')}>Primary</Button>
        <Button mode="secondary" disabled onClick={action('button clicked')}>Secondary</Button>
      </div>
    </ThemeProvider>
  ));
