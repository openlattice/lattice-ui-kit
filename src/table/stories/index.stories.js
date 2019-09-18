import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import { TABLE_DATA, TABLE_HEADERS } from './constants';
import CustomRow from './components/CustomRow';
import {
  Table
} from '..';

const components = {
  Row: CustomRow
};

storiesOf('Table', module)
  .add('Sortable', () => (
    <Card>
      <CardSegment vertical>
        <Table
            headers={TABLE_HEADERS}
            data={TABLE_DATA} />
      </CardSegment>
    </Card>
  ))
  .add('Paginated', () => (
    <Card>
      <CardSegment vertical>
        <Table
            headers={TABLE_HEADERS}
            data={TABLE_DATA}
            rowsPerPageOptions={[5, 20, 50]}
            paginated />
      </CardSegment>
    </Card>
  ))
  .add('Custom Components', () => (
    <Card>
      <CardSegment vertical>
        <Table
            components={components}
            headers={TABLE_HEADERS}
            data={TABLE_DATA}
            rowsPerPageOptions={[5, 20, 50]}
            paginated />
      </CardSegment>
    </Card>
  ))
  .add('isLoading', () => (
    <Card>
      <CardSegment vertical>
        <Table
            components={components}
            headers={TABLE_HEADERS}
            isLoading
            rowsPerPageOptions={[5, 20, 50]}
            paginated />
      </CardSegment>
    </Card>
  ));
