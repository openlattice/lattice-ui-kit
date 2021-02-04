// @flow

import { useState, memo, useCallback, useEffect } from 'react';

import isFunction from 'lodash/isFunction';

import HeadCell from './HeadCell';
import PaginationToolbar from './PaginationToolbar';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { getInitialRowsPerPage } from './TableUtils';
import { Cell, StyledTable } from './styled';

const defaultComponents = {
  Header: TableHeader,
  Body: TableBody,
  Pagination: PaginationToolbar,
  HeadCell,
  Cell,
  Row: TableRow,
};

type ChangeHandler = ? ({
  column ?:string,
  order ?:'asc' | 'desc',
  page :number,
  rowsPerPage :number,
  start :number,
}) => void;

type Props = {
  components :Object;
  data :Array<Object>;
  exact ?:boolean;
  headers :Array<Object>;
  isLoading :boolean;
  onPageChange :ChangeHandler;
  onSort :ChangeHandler;
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

  const [orderBy, setOrderBy] = useState();
  const [order, setOrder] = useState();
  const [currentPage, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);

  useEffect(() => {
    setPage(1);
    if (!rowsPerPageOptions.length) {
      setRowsPerPage(getInitialRowsPerPage(rowCount, rowsPerPageOptions));
    }
  }, [rowCount, rowsPerPageOptions]);

  const handleSort = useCallback((column :string, event :SyntheticEvent<HTMLTableCellElement>) => {
    const isDesc = orderBy === column && order === 'desc';
    const newOrder = isDesc ? 'asc' : 'desc';
    setOrder(newOrder);
    setOrderBy(column);
    if (isFunction(onSort)) {
      onSort({
        column,
        order: newOrder,
        page: currentPage,
        rowsPerPage,
        start: Math.min((currentPage - 1) * rowsPerPage, rowCount)
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
        ...payload,
        column: orderBy,
        order,
      }, event);
    }
  }, [
    onPageChange,
    order,
    orderBy
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

export default memo<Props>(Table);
