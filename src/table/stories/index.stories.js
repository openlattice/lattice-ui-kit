import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import { TABLE_HEADERS, TABLE_DATA } from './constants';
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
            rowsPerPageOptions={[3, 5, 100]}
            paginated />
      </CardSegment>
    </Card>
  ));
