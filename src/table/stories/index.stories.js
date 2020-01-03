import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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

const rowsPerPageOptions = [5, 20, 50];

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
              rowsPerPageOptions={rowsPerPageOptions}
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
            rowsPerPageOptions={rowsPerPageOptions}
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
  .add('isLoading', () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
        setData(TABLE_DATA);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }, [data]);

    return (
      <Card>
        <CardSegment vertical>
          <Table
              components={components}
              headers={TABLE_HEADERS}
              data={data}
              isLoading={isLoading}
              rowsPerPageOptions={rowsPerPageOptions}
              paginated />
        </CardSegment>
      </Card>
    );
  })
  .add('Event handlers', () => {
    const onPageChange = action('onPageChange');
    const onSort = action('onSort');

    return (
      <Card>
        <CardSegment vertical>
          <Table
              headers={TABLE_HEADERS}
              data={TABLE_DATA}
              rowsPerPageOptions={rowsPerPageOptions}
              onPageChange={onPageChange}
              onSort={onSort}
              paginated />
        </CardSegment>
      </Card>
    );
  })
  .add('Exact & totalRows', () => {
    const [data, setData] = useState(TABLE_DATA.slice(0, 5));
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }, []);

    const onPageChange = ({ start, rowsPerPage }) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setData(TABLE_DATA.slice(start, start + rowsPerPage));
      }, 1000);
    };

    return (
      <Card>
        <CardSegment vertical>
          <h1>exact + totalRows</h1>
          <p>
            {`
              Use these properties if you only have the exact data to show per page, but still
              want to suggest the ability to paginate. Use the onPageChange/onSort callbacks to
              determine when to fetch fresh data.
            `}
          </p>
          <Table
              isLoading={isLoading}
              headers={TABLE_HEADERS}
              data={data}
              exact
              totalRows={TABLE_DATA.length}
              rowsPerPageOptions={rowsPerPageOptions}
              onPageChange={onPageChange}
              paginated />
        </CardSegment>
      </Card>
    );
  });
