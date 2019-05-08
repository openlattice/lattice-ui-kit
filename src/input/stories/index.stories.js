// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '..';
import Label from '../../label';
import { Card, CardSegment } from '../../layout';

storiesOf('Input', module)
  .add('Stateless', () => (
    <div>
      <h1>
        Input
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

            <Label htmlFor="story-invalid">Invalid value</Label>
            <Input invalid id="story-invalid" defaultValue="ecittaLnepO" />

            <Label htmlFor="story-eventhandlers">Event handlers (see Actions tab)</Label>
            <Input
                id="story-eventhandlers"
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />
          </form>
        </CardSegment>
      </Card>
    </div>
  ));
