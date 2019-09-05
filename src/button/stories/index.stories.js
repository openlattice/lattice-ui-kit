import React from 'react';
import styled from 'styled-components';

import { faSpaceShuttle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card, CardSegment } from '../../layout';
import {
  Button,
  CopyButton,
  EditButton,
  IconButton,
  PlusButton,
  MinusButton,
  SearchButton,
} from '..';

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

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

const LaunchIcon = (
  <FontAwesomeIcon icon={faSpaceShuttle} transform={{ rotate: -45 }} />
);

storiesOf('Button', module)
  .add('regular button', () => (
    <Card>
      <CardSegment vertical>
        <H2>Enabled</H2>
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
        <H2>Disabled</H2>
        <ButtonRow>
          <Button disabled onClick={action('button clicked')}>Default</Button>
          <Button mode="subtle" disabled onClick={action('button clicked')}>Subtle</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>isLoading</H2>
        <ButtonRow>
          <Button isLoading onClick={action('button clicked')}>Default</Button>
          <Button mode="subtle" isLoading onClick={action('button clicked')}>Subtle</Button>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Truncate</H2>
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
  ))
  .add('icon buttons', () => (
    <Card>
      <CardSegment vertical>
        <H2>Search Button</H2>
        <ButtonRow>
          <SearchButton mode="primary" onClick={action('click')} />
          <SearchButton mode="primary" onClick={action('click')}>Search</SearchButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Copy Button</H2>
        <ButtonRow>
          <CopyButton mode="secondary" onClick={action('click')} />
          <CopyButton mode="secondary" onClick={action('click')}>Copy</CopyButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Edit Button</H2>
        <ButtonRow>
          <EditButton onClick={action('click')} />
          <EditButton onClick={action('click')}>Edit</EditButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Plus Button</H2>
        <ButtonRow>
          <PlusButton mode="positive" onClick={action('click')} />
          <PlusButton mode="positive" onClick={action('click')}>Add</PlusButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Minus Button</H2>
        <ButtonRow>
          <MinusButton mode="negative" onClick={action('click')} />
          <MinusButton mode="negative" onClick={action('click')}>Remove</MinusButton>
        </ButtonRow>
      </CardSegment>
      <CardSegment vertical>
        <H2>Custom Icon Button</H2>
        <ButtonRow>
          <IconButton icon={LaunchIcon} onClick={action('click')} />
          <IconButton icon={LaunchIcon} onClick={action('click')}>Launch</IconButton>
        </ButtonRow>
      </CardSegment>
    </Card>
  ));
