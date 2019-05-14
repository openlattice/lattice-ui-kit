import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '..';
import { Card, CardSegment } from '../../layout';
import CheckboxController from './components/CheckboxController';

storiesOf('Checkbox', module)
  .add('Uncontrolled', () => (
    <div>
      <h1>
        Uncontrolled Checkbox
      </h1>
      <Card>
        <CardSegment>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Checkbox id="story-default" label="Default" />

            <Checkbox id="story-defaultchecked" label="defaultChecked" defaultChecked />

            <Checkbox id="story-defaultcheckedreadonly" label="defaultChecked readOnly" defaultChecked readOnly />

            <Checkbox id="story-disabled" label="Disabled" disabled />

            <Checkbox id="story-disabledchecked" label="Disabled (checked)" disabled defaultChecked />

            <Checkbox
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />

          </form>
        </CardSegment>
      </Card>
    </div>
  ))
  .add('Controlled', () => (
    <CheckboxController action={action} />
  ));
