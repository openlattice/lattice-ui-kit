import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card, CardSegment } from '../../layout';
import Button from '..';

const ButtonRow = styled.div`
  display: flex;

  button {
    margin: 0 5px;
  }
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 30px;
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
          <Button mode="positive" onClick={action('button clicked')}>Positive</Button>
          <Button mode="negative" onClick={action('button clicked')}>Negative</Button>
          <Button mode="subtle" onClick={action('button clicked')}>Subtle</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <h1>Disabled</h1>
        <ButtonRow>
          <Button disabled onClick={action('button clicked')}>Default</Button>
          <Button mode="subtle" disabled onClick={action('button clicked')}>Subtle</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <h1>isLoading</h1>
        <ButtonRow>
          <Button isLoading onClick={action('button clicked')}>Default</Button>
          <Button mode="subtle" isLoading onClick={action('button clicked')}>Subtle</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <h1>Truncate</h1>
        <ButtonGrid>
          <Button onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
          <Button mode="primary" onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
          <Button mode="secondary" onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
          <Button mode="positive" onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
          <Button mode="negative" onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
          <Button mode="subtle" onClick={action('button clicked')}>TextTextTextTextTextTextTextTextTextText</Button>
        </ButtonGrid>
      </CardSegment>
    </Card>
  ));
