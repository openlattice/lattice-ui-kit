import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../../button';
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
  .add('Add Rows', () => {
    const [data, setData] = useState(TABLE_DATA);
    return (
      <Card>
        <CardSegment vertical>
          <Table
              components={components}
              headers={TABLE_HEADERS}
              rowsPerPageOptions={[5, 20, 50]}
              paginated
              data={data} />
        </CardSegment>
        <Button onClick={() => {
          setData([...data, {}]);
        }}>
          Add Blank Row
        </Button>
      </Card>
    );
  })
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
