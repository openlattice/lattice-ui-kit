import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '..';
import { Card, CardSegment } from '../../layout';

storiesOf('Checkbox', module)
  .add('Stateless', () => (
    <div>
      <h1>
        Checkbox
      </h1>
      <Card>
        <CardSegment>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Checkbox id="story-default" label="Default" />

            <Checkbox id="story-defaultchecked" label="Default (checked)" defaultChecked />

            <Checkbox id="story-disabled" label="Disabled" disabled />

            <Checkbox id="story-disabledchecked" label="Disabled (checked)" disabled checked />

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
  ));
