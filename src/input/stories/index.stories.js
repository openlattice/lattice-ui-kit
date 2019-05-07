import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '..';
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
            <label htmlFor="story-stateless">
              Stateless
              <Input type="text" id="story-stateless" />
            </label>
            <label htmlFor="story-disabled">
              Disabled
              <Input type="text" id="story-disabled" disabled />
            </label>
            <label htmlFor="story-placeholder">
              Placeholder
              <Input id="story-placeholder" placeholder="OpenLattice" />
            </label>
          </form>
        </CardSegment>
      </Card>
    </div>
  ));
