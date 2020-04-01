import React from 'react';

import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';

import ExpansionPanel from '../src/components/ExpansionPanel';
import ExpansionPanelDetails from '../src/components/ExpansionPanelDetails';
import ExpansionPanelSummary from '../src/components/ExpansionPanelSummary';
import Label from '../../label';
import { Card, CardSegment, CardStack } from '../../layout';

const expandIcon = <FontAwesomeIcon icon={faChevronDown} size="xs" />;

storiesOf('Expansion', module)
  .add('default', () => (
    <div>
      <h1>
        Expansion
      </h1>
      <CardStack>
        <Card>
          <CardSegment vertical padding="sm">
            <a href="https://material-ui.com/components/expansion-panels/">https://material-ui.com/components/expansion-panels/</a>
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
        <div>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={expandIcon}>
              <Label subtle>Summary</Label>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>Details</ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CardStack>
    </div>
  ));
