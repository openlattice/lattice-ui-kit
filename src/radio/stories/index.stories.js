import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Label from '../../label';
import Radio from '..';
import { Card, CardSegment } from '../../layout';

storiesOf('Radio', module)
  .add('Uncontrolled', () => (
    <div>
      <h1>
        Uncontrolled Radio
      </h1>
      <Card>
        <CardSegment>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Label>Showcase</Label>
            <Radio id="story-unchecked" label="Unchecked" checked={false} />
            <Radio id="story-checked" label="Checked" checked />
            <Radio id="story-checkedreadonly" label="Checked readOnly" checked readOnly />
            <Radio id="story-disabled" label="Disabled" disabled />
            <Radio id="story-disabledchecked" label="Disabled (checked)" disabled checked />

          </form>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Label>See Actions tab</Label>
            <Radio name="group" onChange={action('onChange')} id="story-default" label="Option 1" value="1" />
            <Radio name="group" onChange={action('onChange')} id="story-checked" label="Option 2" value="2" />
            <Radio name="group" onChange={action('onChange')} id="story-checkedreadonly" label="Option 3" value="3" />
            <Radio name="group" onChange={action('onChange')} id="story-disabled" label="Option 4" value="4" />
          </form>
        </CardSegment>
      </Card>
    </div>
  ));
