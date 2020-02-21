import React from 'react';

import { storiesOf } from '@storybook/react';

import Breadcrumbs from '..';
import { Card, CardSegment, CardStack } from '../../layout';

storiesOf('Breadcrumbs', module)
  .addDecorator((storyFn) => (
    <CardStack>
      <Card>
        <CardSegment vertical padding="sm">
          <a href="https://material-ui.com/components/breadcrumbs/">https://material-ui.com/components/breadcrumbs/</a>
          <p>This forwards the <code> &lt;Breadcrumbs /&gt; </code> component from Material-Ui.</p>
          <div>The default <code>separator</code> uses <code>faChevronRight</code></div>
        </CardSegment>
      </Card>
      {storyFn()}
    </CardStack>
  ))
  .add('default', () => (
    <Card>
      <CardSegment vertical padding="sm">
        <Breadcrumbs>
          <div>New Report</div>
          <div>Bruce Wayne</div>
        </Breadcrumbs>
      </CardSegment>
    </Card>
  ));
