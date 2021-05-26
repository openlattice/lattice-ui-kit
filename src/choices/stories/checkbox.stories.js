import { action } from '@storybook/addon-actions';

import CheckboxController from './components/CheckboxController';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { ChoiceGroup } from '../src/components/styled';
import { Checkbox } from '..';

export default {
  title: 'Checkbox',
};

export const Uncontrolled = () => (
  <div>
    <h1>Uncontrolled Checkbox</h1>
    <Card>
      <CardSegment>
        <form
            style={{
              display: 'flex',
              flex: '0 1 100%',
              flexDirection: 'column',
            }}>
          <ChoiceGroup>
            <Checkbox id="story-default" label="Default" />
            <Checkbox id="story-defaultchecked" label="Default Checked" defaultChecked />
            <Checkbox id="story-defaultcheckedreadonly" label="Checked readOnly" checked readOnly />
            <Checkbox id="story-disabled" label="Disabled" disabled />
            <Checkbox
                id="story-disabledchecked"
                label="Disabled (checked)"
                disabled
                defaultChecked />
            <Checkbox
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />
          </ChoiceGroup>
        </form>
      </CardSegment>
    </Card>
  </div>
);

export const Controlled = () => <CheckboxController action={action} />;

export const Button = () => (
  <div>
    <h1>Checkbox Button</h1>
    <Card>
      <CardSegment vertical>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
          <Label>Showcase</Label>
          <ChoiceGroup row>
            <Checkbox mode="button" id="story-default" label="Default" />
            <Checkbox
                mode="button"
                id="story-defaultchecked"
                label="Default Checked"
                defaultChecked />
            <Checkbox
                mode="button"
                id="story-defaultcheckedreadonly"
                label="Checked readOnly"
                checked
                readOnly />
            <Checkbox mode="button" id="story-disabled" label="Disabled" disabled />
            <Checkbox
                mode="button"
                id="story-disabledchecked"
                label="Disabled (checked)"
                disabled
                defaultChecked />
            <Checkbox
                mode="button"
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />
          </ChoiceGroup>
        </form>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
          <Label>Group</Label>
          <ChoiceGroup row>
            <Checkbox mode="button" id="group-1" label="Out of Touch with Reality" />
            <Checkbox mode="button" id="group-2" label="Neglect of Self Care" />
            <Checkbox mode="button" id="group-3" label="Depressed" />
            <Checkbox mode="button" id="group-4" label="Disorderly Conduct" />
            <Checkbox mode="button" id="group-5" label="Disorientation" />
            <Checkbox mode="button" id="group-6" label="None" />
          </ChoiceGroup>
        </form>
      </CardSegment>
    </Card>
  </div>
);

export const Chip = () => (
  <div>
    <h1>Checkbox Chip</h1>
    <Card>
      <CardSegment vertical>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
          <Label>Showcase</Label>
          <div>
            <Checkbox mode="chip" id="story-default" label="Default" />
            <Checkbox
                mode="chip"
                id="story-defaultchecked"
                label="Default Checked"
                defaultChecked />
            <Checkbox
                mode="chip"
                id="story-defaultcheckedreadonly"
                label="Checked readOnly"
                checked
                readOnly />
            <Checkbox mode="chip" id="story-disabled" label="Disabled" disabled />
            <Checkbox
                mode="chip"
                id="story-disabledchecked"
                label="Disabled (checked)"
                disabled
                defaultChecked />
            <Checkbox
                mode="chip"
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                onChange={action('onChange')}
                onBlur={action('onBlur')}
                onFocus={action('onFocus')} />
          </div>
        </form>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
          <Label>Group</Label>
          <div>
            <Checkbox mode="chip" id="group-1" label="Out of Touch with Reality" />
            <Checkbox mode="chip" id="group-2" label="Neglect of Self Care" />
            <Checkbox mode="chip" id="group-3" label="Depressed" />
            <Checkbox mode="chip" id="group-4" label="Disorderly Conduct" />
            <Checkbox mode="chip" id="group-5" label="Disorientation" />
            <Checkbox mode="chip" id="group-6" label="None" />
          </div>
        </form>
      </CardSegment>
    </Card>
  </div>
);
