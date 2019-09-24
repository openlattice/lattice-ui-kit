// @flow

import React, { useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';

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
  data ? :Array<Object>;
  headers :Array<Object>;
  isLoading :boolean;
  rowsPerPageOptions ? :number[];
  paginated ? :boolean;
};

const Table = (props :Props) => {

  const {
    components: propComponents,
    data,
    headers,
    isLoading,
    rowsPerPageOptions,
    paginated,
  } = props;

  const rowCount = !isEmpty(data) ? data.length : 0;
  const initialRowsPerPage = getInitialRowsPerPage(rowCount, rowsPerPageOptions);

  const [orderBy, setOrderBy] = React.useState();
  const [order, setOrder] = React.useState();
  const [currentPage, setPage] = React.useState();
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  useEffect(() => {
    setPage(0);
    if (isEmpty(rowsPerPageOptions)) {
      setRowsPerPage(getInitialRowsPerPage(rowCount, rowsPerPageOptions));
    }
  }, [rowCount, rowsPerPageOptions]);

  const handleSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const components = { ...defaultComponents, ...propComponents };
  return (
    <div>
      {
        paginated && (
          <components.Pagination
              count={rowCount}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions}
              setRowsPerPage={setRowsPerPage}
              setPage={setPage} />
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
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            page={currentPage} />
      </StyledTable>
      {
        paginated && (
          <components.Pagination
              count={rowCount}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={rowsPerPageOptions}
              setRowsPerPage={setRowsPerPage}
              setPage={setPage} />
        )
      }
    </div>
  );
};

Table.defaultProps = {
  components: {},
  data: [],
  paginated: false,
  rowsPerPageOptions: [],
};

export default React.memo<Props>(Table);
