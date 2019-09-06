// @flow
import React from 'react';
import type { ComponentType } from 'react';

import { TableRow, Cell } from './styled';
import { getSortedData } from './TableUtils';

import type { SortOrder } from '../../types';

type RowData = {
  id :string | number;
}

type Props = {
  order ? :SortOrder;
  orderBy ? :string;
  data :RowData[];
  rowsPerPage :number;
  page :number;
  rowComponent ? :ComponentType<any>;
};

const TableBody = (props :Props) => {
  const {
    data,
    order,
    orderBy,
    page,
    rowComponent: RowComponent,
    rowsPerPage,
  } = props;

  const sortedData = getSortedData(data, order, orderBy);
  const dataByPage = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <tbody>
      {
        dataByPage.map((rowData) => {
          if (RowComponent) {
            return <RowComponent key={rowData.id} data={rowData} />;
          }

          const { id, ...rest } = rowData;
          const rows = Object.keys(rest).map((property) => <Cell>{rest[property]}</Cell>);
          return (
            <TableRow key={id}>
              {rows}
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
  rowComponent: undefined
};

export default React.memo<Props>(TableBody);
