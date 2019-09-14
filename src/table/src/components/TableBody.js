// @flow
import React from 'react';

import { getSortedData } from './TableUtils';

import { StyledRow, Cell } from './styled';
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
          return (
            <components.Row
                key={id}
                data={rowData}
                headers={headers}
                components={components} />
          );
        })
      }
      {
        !!emptyRowCount && (
          <StyledRow id="empty-row-filler">
            <Cell colSpan={headers.length} cellStyle={{ height: emptyHeight }} />
          </StyledRow>
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
