import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../../button';
import {
  Card,
  CardHeader,
  CardSegment,
  CardStack
} from '../../layout';
import {
  COMPARATOR_DATA,
  COMPARATOR_HEADERS,
  TABLE_DATA,
  TABLE_HEADERS
} from './constants';
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
  .add('Custom Comparator', () => (
    <Card>
      <CardSegment vertical>
        Priority is sorted from High to Low instead of alphabetically
        <Table
            headers={COMPARATOR_HEADERS}
            data={COMPARATOR_DATA} />
      </CardSegment>
    </Card>
  ))
  .add('Paginated', () => (
    <CardStack>
      <Card>
        <CardHeader padding="sm">
          Multiple rowsPerPageOptions values
        </CardHeader>
        <CardSegment vertical>
          <Table
              headers={TABLE_HEADERS}
              data={TABLE_DATA}
              rowsPerPageOptions={[5, 20, 50]}
              paginated />
        </CardSegment>
      </Card>
      <Card>
        <CardHeader padding="sm">
          One rowsPerPageOptions value
        </CardHeader>
        <CardSegment vertical>
          <Table
              headers={TABLE_HEADERS}
              data={TABLE_DATA}
              rowsPerPageOptions={[5]}
              paginated />
        </CardSegment>
      </Card>
    </CardStack>
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
