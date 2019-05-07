import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '..';
import Label from '../../label';
import { Card, CardSegment } from '../../layout';

storiesOf('Input', module)
  .add('Stateless', () => (
    <div>
      <h1>
        Input (Stateless)
      </h1>
      <Card>
        <CardSegment>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Label htmlFor="story-stateless">Stateless</Label>
            <Input type="text" id="story-stateless" />

            <Label htmlFor="story-disabled">Disabled</Label>
            <Input type="text" id="story-disabled" disabled />

            <Label htmlFor="story-placeholder">Placeholder</Label>
            <Input id="story-placeholder" placeholder="OpenLattice" />

            <Label htmlFor="story-defaultvalue">Default value</Label>
            <Input id="story-defaultvalue" defaultValue="OpenLattice" />
          </form>
        </CardSegment>
      </Card>
    </div>
  ));
