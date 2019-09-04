import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import { Card, CardSegment } from '../../layout';
import Button from '../../button';
import {
  Cell,
  Table,
  TableRow,
  TableHead,
  TableBody,
  HeadCell
} from '../src/components/styled';
import { TABLE_HEADERS, TABLE_DATA } from './constants';

storiesOf('Table', module)
  .add('Basic', () => (
    <Card>
      <CardSegment vertical>
        <Table rowsPerPage={10}>
          <TableHead>
            <TableRow sticky>
              {
                TABLE_HEADERS.map((header) => {
                  const { key, label } = header;
                  return <HeadCell key={key}>{label}</HeadCell>;
                })
              }
              <HeadCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {
              TABLE_DATA.map((data) => {
                const {
                  name,
                  dob,
                  manager,
                  lastUpdated,
                  id,
                } = data;
                return (
                  <TableRow key={id}>
                    <Cell>{name}</Cell>
                    <Cell>{dob}</Cell>
                    <Cell>{manager}</Cell>
                    <Cell>{lastUpdated}</Cell>
                    <Cell><Button mode="subtle">View</Button></Cell>
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </CardSegment>
    </Card>
  ));
