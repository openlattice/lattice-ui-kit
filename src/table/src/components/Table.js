// @flow

import React, { useCallback, useEffect } from 'react';
import isFunction from 'lodash/isFunction';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import HeadCell from './HeadCell';
import TableRow from './TableRow';
import PaginationToolbar from './PaginationToolbar';
import { StyledTable, Cell } from './styled';
import { getInitialRowsPerPage } from './TableUtils';

const defaultComponents = {
  Header: TableHeader,
  Body: TableBody,
  Pagination: PaginationToolbar,
  HeadCell,
  Cell,
  Row: TableRow,
};

type Props = {
  components :Object;
  data :Array<Object>;
  exact ?:boolean;
  headers :Array<Object>;
  isLoading :boolean;
  onPageChange ?:({
    page :number,
    start :number,
    rowsPerPage :number
  }) => void;
  onSort ?:({
    column :string,
    descending :boolean
  }) => void;
  paginated ? :boolean;
  rowsPerPageOptions :number[];
  totalRows ?:number;
};

const Table = (props :Props) => {

  const {
    components: propComponents,
    data,
    exact,
    headers,
    isLoading,
    onPageChange,
    onSort,
    paginated,
    rowsPerPageOptions,
    totalRows,
  } = props;
  const rowCount = totalRows || (data && data.length);
  const initialRowsPerPage = getInitialRowsPerPage(rowCount, rowsPerPageOptions);

  const [orderBy, setOrderBy] = React.useState();
  const [order, setOrder] = React.useState();
  const [currentPage, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  useEffect(() => {
    setPage(0);
    if (!rowsPerPageOptions.length) {
      setRowsPerPage(getInitialRowsPerPage(rowCount, rowsPerPageOptions));
    }
  }, [rowCount, rowsPerPageOptions]);

  const handleSort = useCallback((column :string, event :SyntheticEvent<HTMLTableCellElement>) => {
    const isDesc = orderBy === column && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(column);
    if (isFunction(onSort)) {
      onSort({
        column,
        descending: !isDesc,
        page: currentPage,
        rowsPerPage,
        start: Math.min(currentPage * rowsPerPage, rowCount)
      }, event);
    }
  }, [
    currentPage,
    rowsPerPage,
    rowCount,
    onSort,
    order,
    orderBy
  ]);

  const handlePageChange = useCallback((payload, event) => {
    const { page: newPage, rowsPerPage: newRowsPerPage } = payload;
    setPage(newPage);
    setRowsPerPage(newRowsPerPage);
    if (isFunction(onPageChange)) {
      onPageChange({
        column: orderBy,
        descending: order,
        page: newPage,
        rowsPerPage: newRowsPerPage,
        start: Math.min(newPage * newRowsPerPage, rowCount)
      }, event);
    }
  }, [
    onPageChange,
    order,
    orderBy,
    rowCount,
  ]);

  const components = { ...defaultComponents, ...propComponents };
  return (
    <div>
      {
        paginated && (
          <components.Pagination
              count={rowCount}
              onPageChange={handlePageChange}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions} />
        )
      }
      <StyledTable>
        <components.Header
            components={components}
            headers={headers}
            order={order}
            orderBy={orderBy}
            onSort={handleSort}
            sticky />
        <components.Body
            components={components}
            data={data}
            headers={headers}
            isLoading={isLoading}
            exact={exact}
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            page={currentPage} />
      </StyledTable>
      {
        paginated && (
          <components.Pagination
              count={rowCount}
              onPageChange={handlePageChange}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions} />
        )
      }
    </div>
  );
};

Table.defaultProps = {
  components: {},
  data: [],
  exact: false,
  onPageChange: undefined,
  onSort: undefined,
  paginated: false,
  rowsPerPageOptions: [],
  totalRows: 0,
};

export default React.memo<Props>(Table);
