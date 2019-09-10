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
  headers :Object[];
  order ? :SortOrder;
  orderBy ? :string;
  data ? :RowData[];
  rowsPerPage :number;
  page :number;
  rowComponent ? :ComponentType<any>;
};

const TableBody = (props :Props) => {
  const {
    data,
    headers,
    order,
    orderBy,
    page,
    rowComponent: RowComponent,
    rowsPerPage,
  } = props;

  const sortedData = getSortedData(data, order, orderBy);
  const dataByPage = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // inject empty row to maintain table size
  const emptyRowCount = rowsPerPage - dataByPage.length;
  // height per row + (row - 1) * (padding + border)
  const emptyHeight = emptyRowCount * 24 + (emptyRowCount - 1) * 21;

  return (
    <tbody>
      {
        dataByPage.map((rowData) => {
          if (RowComponent) {
            return <RowComponent key={rowData.id} data={rowData} headers={headers} />;
          }

          const { id } = rowData;
          const cells = headers.map((header) => <Cell key={`${id}_cell_${header.key}`}>{rowData[header.key]}</Cell>);
          return (
            <TableRow key={id}>
              {cells}
            </TableRow>
          );
        })
      }
      {
        !!emptyRowCount && (
          <TableRow id="empty-row-filler">
            <Cell colSpan={headers.length} height={emptyHeight} />
          </TableRow>
        )
      }
    </tbody>
  );
};

TableBody.defaultProps = {
  data: [],
  order: false,
  orderBy: undefined,
  rowComponent: undefined
};

export default React.memo<Props>(TableBody);
