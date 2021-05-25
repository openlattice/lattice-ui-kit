import { action } from '@storybook/addon-actions';

import Label from '../../label';
import { Card, CardSegment } from '../../layout';
import { ChoiceGroup } from '../src/components/styled';
import { Radio } from '..';

export default {
  title: 'Radio',
};

export const Uncontrolled = () => (
  <div>
    <h1>Uncontrolled Radio</h1>
    <Card>
      <CardSegment vertical={false}>
        <form
            style={{
              display: 'flex',
              flex: '0 1 100%',
              flexDirection: 'column',
            }}>
          <Label>Showcase</Label>
          <ChoiceGroup>
            <Radio id="story-default" label="Default" />
            <Radio id="story-checked" label="Default Checked" defaultChecked />
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
          </ChoiceGroup>
        </form>
        <form
            style={{
              display: 'flex',
              flex: '0 1 100%',
              flexDirection: 'column',
            }}>
          <Label>Group</Label>
          <ChoiceGroup>
            <Radio name="group" id="group-1" label="1" value="1" />
            <Radio name="group" id="group-2" label="2" value="2" />
            <Radio name="group" id="group-3" label="3" value="3" />
            <Radio name="group" id="group-4" label="4" value="4" />
            <Radio name="group" id="group-5" label="5" value="5" />
          </ChoiceGroup>
        </form>
      </CardSegment>
      <CardSegment>
        <form
            style={{
              display: 'flex',
              flex: '0 1 100%',
              flexDirection: 'column',
            }}>
          <Label>Row Group</Label>
          <ChoiceGroup>
            <Radio name="row-group" id="row-group-1" label="1" value="1" />
            <Radio name="row-group" id="row-group-2" label="2" value="2" />
            <Radio name="row-group" id="row-group-3" label="3" value="3" />
            <Radio name="row-group" id="row-group-4" label="4" value="4" />
            <Radio name="row-group" id="row-group-5" label="5" value="5" />
          </ChoiceGroup>
        </form>
      </CardSegment>
    </Card>
  </div>
);

export const Button = () => (
  <div>
    <h1>Radio Button</h1>
    <Card>
      <CardSegment vertical>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: 'fit-content',
            }}>
          <Label>Showcase</Label>
          <ChoiceGroup row>
            <Radio mode="button" id="story-default" label="Default" />
            <Radio mode="button" id="story-checked" label="Default Checked" defaultChecked />
            <Radio
                mode="button"
                id="story-checkedreadonly"
                label="Checked readOnly"
                checked
                readOnly />
            <Radio mode="button" id="story-disabled" label="Disabled" disabled />
            <Radio
                mode="button"
                id="story-disabledchecked"
                label="Disabled (checked)"
                disabled
                checked />
            <Radio
                mode="button"
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                value={false}
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
            <Radio
                mode="button"
                name="group"
                id="group-1"
                label="Out of Touch with Reality"
                value="1" />
            <Radio mode="button" name="group" id="group-2" label="Neglect of Self Care" value="2" />
            <Radio mode="button" name="group" id="group-3" label="Depressed" value="3" />
            <Radio mode="button" name="group" id="group-4" label="Disorderly Conduct" value="4" />
            <Radio mode="button" name="group" id="group-5" label="Disorientation" value="5" />
            <Radio mode="button" name="group" id="group-6" label="None" value="6" />
          </ChoiceGroup>
        </form>
      </CardSegment>
    </Card>
  </div>
);

export const Pill = () => (
  <div>
    <h1>Radio Pill</h1>
    <Card>
      <CardSegment vertical>
        <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: 'fit-content',
            }}>
          <Label>Showcase</Label>
          <div>
            <Radio mode="pill" id="story-default" label="Default" />
            <Radio mode="pill" id="story-checked" label="Default Checked" defaultChecked />
            <Radio
                mode="pill"
                id="story-checkedreadonly"
                label="Checked readOnly"
                checked
                readOnly />
            <Radio mode="pill" id="story-disabled" label="Disabled" disabled />
            <Radio
                mode="pill"
                id="story-disabledchecked"
                label="Disabled (checked)"
                disabled
                checked />
            <Radio
                mode="pill"
                id="story-eventhandlers"
                label="Event handlers (see Actions tab)"
                value={false}
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
            <Radio
                mode="pill"
                name="group"
                id="group-1"
                label="Out of Touch with Reality"
                value="1" />
            <Radio mode="pill" name="group" id="group-2" label="Neglect of Self Care" value="2" />
            <Radio mode="pill" name="group" id="group-3" label="Depressed" value="3" />
            <Radio mode="pill" name="group" id="group-4" label="Disorderly Conduct" value="4" />
            <Radio mode="pill" name="group" id="group-5" label="Disorientation" value="5" />
            <Radio mode="pill" name="group" id="group-6" label="None" value="6" />
          </div>
        </form>
      </CardSegment>
    </Card>
  </div>
);
