import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { Card, CardSegment } from '../../layout';
import { TABLE_DATA, TABLE_HEADERS } from './constants';
import { getHoverStyles } from '../../utils/StyleUtils';
import {
  Table
} from '..';

const CustomRow = styled.tr`
  ${getHoverStyles};
`;

const components = {
  Row: () => (
    <CustomRow onClick={() => {}}>
      <td colSpan="4">row</td>
    </CustomRow>
  )
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
  ));
