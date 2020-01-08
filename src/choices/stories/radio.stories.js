import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { Radio } from '..';

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
            <Radio id="story-default" label="Default" />
            <Radio id="story-checked" label="defaultChecked" defaultChecked />
            <Radio id="story-checkedreadonly" label="Checked readOnly" checked readOnly />
            <Radio id="story-disabled" label="Disabled" disabled />
            <Radio id="story-disabledchecked" label="Disabled (checked)" disabled checked />
            <Radio
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                value={false}
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />

          </form>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Label>Group</Label>
            <Radio name="group" id="group-1" label="1" value="1" />
            <Radio name="group" id="group-2" label="2" value="2" />
            <Radio name="group" id="group-3" label="3" value="3" />
            <Radio name="group" id="group-4" label="4" value="4" />
            <Radio name="group" id="group-5" label="5" value="5" />

          </form>
        </CardSegment>
      </Card>
    </div>
  ))
  .add('Button', () => (
    <div>
      <h1>
        Radio Button
      </h1>
      <Card>
        <CardSegment vertical>
          <form style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Label>Showcase</Label>
            <Radio mode="button" id="story-default" label="Default" />
            <Radio mode="button" id="story-checked" label="defaultChecked" defaultChecked />
            <Radio mode="button" id="story-checkedreadonly" label="Checked readOnly" checked readOnly />
            <Radio mode="button" id="story-disabled" label="Disabled" disabled />
            <Radio mode="button" id="story-disabledchecked" label="Disabled (checked)" disabled checked />
            <Radio
                mode="button"
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                value={false}
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />

          </form>
          <form style={{
            display: 'flex',
            flex: '0 1 100%',
            flexDirection: 'column'
          }}>
            <Label>Group</Label>
            <Radio mode="button" name="group" id="group-1" label="1" value="1" />
            <Radio mode="button" name="group" id="group-2" label="2" value="2" />
            <Radio mode="button" name="group" id="group-3" label="3" value="3" />
            <Radio mode="button" name="group" id="group-4" label="4" value="4" />
            <Radio mode="button" name="group" id="group-5" label="5" value="5" />

          </form>
        </CardSegment>
      </Card>
    </div>
  ));
