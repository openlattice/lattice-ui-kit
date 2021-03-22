import React from 'react';

import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import { Chip } from '..';

const ButtonRow = styled.div`
  margin: 5px 0;

  && > * {
    margin: 0 5px;
  }
`;

const H2 = styled.h2`
  margin: 0 0 20px 0;
`;

const Span = styled.span`
  margin: 20px 0;
`;

storiesOf('Chip', module)
  .add('Chips', () => (
    <Card>
      <CardSegment>
        <H2>Chip</H2>
        <ButtonRow>
          <Chip color="default" label="default" />
          <Chip color="primary" label="Primary" />
          <Chip color="secondary" label="Secondary" />
          <Chip color="blue" label="Blue" />
          <Chip color="teal" label="Teal" />
          <Chip color="green" label="Green" />
          <Chip color="yellow" label="Yellow" />
          <Chip color="orange" label="Orange" />
          <Chip color="red" label="Red" />
          <Chip color="magenta" label="Magenta" />
          <Chip color="violet" label="Violet" />
        </ButtonRow>
        <Span>disabled</Span>
        <ButtonRow>
          <Chip color="default" disabled label="default" />
          <Chip color="primary" disabled label="Primary" />
          <Chip color="secondary" disabled label="Secondary" />
          <Chip color="blue" disabled label="Blue" />
          <Chip color="teal" disabled label="Teal" />
          <Chip color="green" disabled label="Green" />
          <Chip color="yellow" disabled label="Yellow" />
          <Chip color="orange" disabled label="Orange" />
          <Chip color="red" disabled label="Red" />
          <Chip color="magenta" disabled label="Magenta" />
          <Chip color="violet" disabled label="Violet" />
        </ButtonRow>
        <Span>onDelete</Span>
        <ButtonRow>
          <Chip color="default" label="default" onDelete={() => ''} />
          <Chip color="primary" label="Primary" onDelete={() => ''} />
          <Chip color="secondary" label="Secondary" onDelete={() => ''} />
          <Chip color="blue" label="Blue" onDelete={() => ''} />
          <Chip color="blue" label="Blue" size="small" onDelete={() => ''} />
          <Chip color="teal" label="Teal" onDelete={() => ''} />
          <Chip color="green" label="Green" onDelete={() => ''} />
          <Chip color="yellow" label="Yellow" onDelete={() => ''} />
          <Chip color="orange" label="Orange" onDelete={() => ''} />
          <Chip color="red" label="Red" onDelete={() => ''} />
          <Chip color="magenta" label="Magenta" onDelete={() => ''} />
          <Chip color="violet" label="Violet" onDelete={() => ''} />
        </ButtonRow>
        <Span>clickable</Span>
        <ButtonRow>
          <Chip color="default" label="default" clickable />
          <Chip color="primary" label="Primary" clickable />
          <Chip color="secondary" label="Secondary" clickable />
          <Chip color="blue" label="Blue" clickable />
          <Chip color="teal" label="Teal" clickable />
          <Chip color="green" label="Green" clickable />
          <Chip color="yellow" label="Yellow" clickable />
          <Chip color="orange" label="Orange" clickable />
          <Chip color="red" label="Red" clickable />
          <Chip color="magenta" label="Magenta" clickable />
          <Chip color="violet" label="Violet" clickable />
        </ButtonRow>
        <Span>Size</Span>
        <ButtonRow>
          <Chip color="default" label="small" size="small" />
        </ButtonRow>
        <ButtonRow>
          <Chip color="default" label="medium" size="medium" />
        </ButtonRow>
      </CardSegment>
    </Card>
  ));
