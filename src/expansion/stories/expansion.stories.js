import React from 'react';

import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExpansionPanel from '../src/components/ExpansionPanel';
import ExpansionPanelDetails from '../src/components/ExpansionPanelDetails';
import ExpansionPanelSummary from '../src/components/ExpansionPanelSummary';
import Label from '../../label';
import { Card, CardSegment, CardStack } from '../../layout';

const expandIcon = <FontAwesomeIcon icon={faChevronDown} size="xs" />;

export default {
  title: 'Expansion',

  decorators: [
    (Story) => (
      <div>
        <h1>Expansion</h1>
        <CardStack>
          <Card>
            <CardSegment vertical padding="sm">
              <a href="https://material-ui.com/components/expansion-panels/">
                https://material-ui.com/components/expansion-panels/
              </a>
              <p>
                This forwards
                <code> &lt;ExpansionPanel /&gt; </code>
                ,
                <code> &lt;ExpansionPanelDetails /&gt; </code>
                , and
                <code> &lt;ExpansionPanelSummary /&gt; </code>
                components from Material-Ui.
              </p>
            </CardSegment>
          </Card>
          <Story />
        </CardStack>
      </div>
    ),
  ],
};

export const Default = () => (
  <div>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={expandIcon}>
        <Label subtle>Summary</Label>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>Details</ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

Default.story = {
  name: 'default',
};

export const Group = () => (
  <div>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={expandIcon}>
        <Label subtle>Summary #1</Label>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>Details #1</ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={expandIcon}>
        <Label subtle>Summary #2</Label>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>Details #2</ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={expandIcon}>
        <Label subtle>Summary #3</Label>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>Details #3</ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

Group.story = {
  name: 'group',
};
