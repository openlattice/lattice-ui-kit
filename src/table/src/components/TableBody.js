// @flow
import React from 'react';

import Spinner from '../../../spinner';
import { getSortedData } from './TableUtils';

import { StyledRow, Cell } from './styled';
import type { RowData, SortOrder } from '../../types';

type Props = {
  className ? :string;
  components :Object;
  data ? :RowData[];
  headers :Object[];
  isLoading ? :boolean;
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
    isLoading,
    order,
    orderBy,
    page,
    rowsPerPage,
  } = props;

  const sortedData = getSortedData(data, order, orderBy);
  const dataByPage :RowData[] = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // inject empty row to maintain table size
  const emptyRowCount = rowsPerPage - dataByPage.length;
  // height per row + (row - 1) * (padding + border)
  let emptyHeight = `${emptyRowCount * 24 + (emptyRowCount - 1) * 21}px`;

  if (isLoading) {
    emptyHeight = `${rowsPerPage * 24 + (rowsPerPage - 1) * 21}px`;
    return (
      <tbody className={className}>
        <StyledRow id="empty-row-filler">
          <Cell colSpan={headers.length} cellStyle={{ height: emptyHeight, textAlign: 'center' }}>
            {
              isLoading && (
                <Spinner size="2x" />
              )
            }
          </Cell>
        </StyledRow>
      </tbody>
    );
  }

  return (
    <tbody className={className}>
      {
        dataByPage.map((rowData :RowData, index) => {

          const { id } = rowData;
          const key = `row${index}-id${id}`;
          return (
            <components.Row
                key={key}
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
  isLoading: false,
  order: false,
  orderBy: undefined
};

export default React.memo<Props>(TableBody);
