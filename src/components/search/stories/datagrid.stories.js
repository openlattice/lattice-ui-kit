import React from 'react';
import { storiesOf } from '@storybook/react';

import DataGrid from '../src/components/DataGrid';
import { Card, CardSegment } from '../../../layout';
import { mockResultLabels, mockSearchResultsForPeople } from '../src/components/constants';

storiesOf('DataGrid', module)
  .add('default', () => (
    <Card>
      <CardSegment>
        <DataGrid
            data={mockSearchResultsForPeople.first()}
            labelMap={mockResultLabels} />
      </CardSegment>
    </Card>
  ))
  .add('truncate', () => (
    <Card>
      <CardSegment>
        <DataGrid
            data={mockSearchResultsForPeople.first()}
            labelMap={mockResultLabels}
            truncate />
      </CardSegment>
    </Card>
  ))
  .add('columns', () => (
    <Card>
      <CardSegment>
        <DataGrid
            data={mockSearchResultsForPeople.first()}
            columns={3}
            labelMap={mockResultLabels}
            truncate />
      </CardSegment>
    </Card>
  ));
