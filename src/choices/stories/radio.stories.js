import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Radio } from '..';
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
            <Radio id="story-default" label="Default" />

            <Radio id="story-checked" label="Checked" checked />

            <Radio id="story-checkedreadonly" label="Checked readOnly" checked readOnly />

            <Radio id="story-disabled" label="Disabled" disabled />

            <Radio id="story-disabledchecked" label="Disabled (checked)" disabled checked />

            <Radio
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
