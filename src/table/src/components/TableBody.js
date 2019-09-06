// @flow
import React from 'react';

import { TableRow, Cell } from './styled';
import { getSortedData } from './TableUtils';

import type { SortOrder } from '../../types';

type Props = {
  order ? :SortOrder;
  orderBy ? :string;
  data :Object[];
  rowsPerPage :number;
  page :number;
  // TODO: render rowComponent with data when available;
  // rowComponent ? :Node;
};

const TableBody = (props :Props) => {
  const {
    order,
    orderBy,
    data,
    page,
    rowsPerPage,
  } = props;

  // sort data in 'asc' or 'desc' order
  // using the orderBy property

  const sortedData = getSortedData(data, order, orderBy);
  const dataByPage = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <tbody>
      {
        dataByPage.map((rowData) => {
          const {
            name,
            dob,
            manager,
            lastUpdated,
            id,
          } = rowData;
          return (
            <TableRow key={id}>
              <Cell>{name}</Cell>
              <Cell>{dob}</Cell>
              <Cell>{manager}</Cell>
              <Cell>{lastUpdated}</Cell>
            </TableRow>
          );
        })
      }
    </tbody>
  );
};

TableBody.defaultProps = {
  order: false,
  orderBy: undefined,
};

export default React.memo<Props>(TableBody);
