import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import { TABLE_DATA, TABLE_HEADERS } from './constants';
import {
  Table
} from '..';

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
  ));
