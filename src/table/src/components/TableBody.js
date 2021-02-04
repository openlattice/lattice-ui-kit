// @flow
import { memo } from 'react';

import { getSortedData } from './TableUtils';
import { Cell, StyledRow } from './styled';

import Spinner from '../../../spinner';
import type { RowData, SortOrder } from '../../types';

type Props = {
  className ? :string;
  components :Object;
  data :RowData[];
  exact ? :boolean;
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
    exact,
    order,
    orderBy,
    page,
    rowsPerPage,
  } = props;

  const sortedData = getSortedData(headers, data, order, orderBy);
  const dataByPage :RowData[] = exact
    ? sortedData
    : sortedData.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage);

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
        dataByPage.map((rowData :RowData) => {

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
  isLoading: false,
  exact: false,
  order: false,
  orderBy: undefined
};

export default memo<Props>(TableBody);
