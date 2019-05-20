import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '..';
import { Card, CardSegment } from '../../layout';

const ButtonRow = styled.div`
  display: flex;

  button {
    margin: 0 5px;
  }
`;

storiesOf('Button', module)
  .add('with text', () => (
    <Card>
      <CardSegment vertical>
        <h1>Enabled</h1>
        <ButtonRow>
          <Button onClick={action('button clicked')}>Default</Button>
          <Button mode="primary" onClick={action('button clicked')}>Primary</Button>
          <Button mode="secondary" onClick={action('button clicked')}>Secondary</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <h1>Disabled</h1>
        <ButtonRow>
          <Button disabled onClick={action('button clicked')}>Default</Button>
          <Button mode="primary" disabled onClick={action('button clicked')}>Primary</Button>
          <Button mode="secondary" disabled onClick={action('button clicked')}>Secondary</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <h1>isLoading</h1>
        <ButtonRow>
          <Button isLoading onClick={action('button clicked')}>Default</Button>
          <Button mode="primary" isLoading onClick={action('button clicked')}>Primary</Button>
          <Button mode="secondary" isLoading onClick={action('button clicked')}>Secondary</Button>
        </ButtonRow>
      </CardSegment>
    </Card>
  ));
