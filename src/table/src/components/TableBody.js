// @flow
import React from 'react';

import { getSortedData } from './TableUtils';

import type { SortOrder } from '../../types';

type RowData = {
  id :string | number;
};

type Props = {
  className ? :string;
  components :Object;
  data ? :RowData[];
  headers :Object[];
  order ? :SortOrder;
  orderBy ? :string;
  page :number;
  rowsPerPage :number;
};

const TableBody = (props :Props) => {
  const {
    className,
    components,
    data,
    headers,
    order,
    orderBy,
    page,
    rowsPerPage,
  } = props;

  const sortedData = getSortedData(data, order, orderBy);
  const dataByPage = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // inject empty row to maintain table size
  const emptyRowCount = rowsPerPage - dataByPage.length;
  // height per row + (row - 1) * (padding + border)
  const emptyHeight = `${emptyRowCount * 24 + (emptyRowCount - 1) * 21}px`;

  return (
    <tbody className={className}>
      {
        dataByPage.map((rowData) => {

          const { id } = rowData;
          const cells = headers
            .map((header) => <components.Cell key={`${id}_cell_${header.key}`}>{rowData[header.key]}</components.Cell>);
          return (
            <components.Row key={id}>
              {cells}
            </components.Row>
          );
        })
      }
      {
        !!emptyRowCount && (
          <components.Row id="empty-row-filler">
            <components.Cell colSpan={headers.length} cellStyle={{ height: emptyHeight }} />
          </components.Row>
        )
      }
    </tbody>
  );
};

TableBody.defaultProps = {
  className: undefined,
  data: [],
  order: false,
  orderBy: undefined
};

export default React.memo<Props>(TableBody);
