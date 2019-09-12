// @flow

import React from 'react';
import isEmpty from 'lodash/isEmpty';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationToolbar from './PaginationToolbar';
import { StyledTable } from './styled';

type Props = {
  data ? :Array<Object>;
  headers :Array<Object>;
  rowsPerPageOptions ? :number[];
  paginated ? :boolean;
};

const Table = (props :Props) => {

  const {
    data,
    headers,
    rowsPerPageOptions,
    paginated,
  } = props;

  const rowCount = !isEmpty(data) ? data.length : 0;
  let initialRowsPerPage = rowCount || 5;
  if (paginated && !isEmpty(rowsPerPageOptions)) [initialRowsPerPage] = rowsPerPageOptions;

  const [orderBy, setOrderBy] = React.useState();
  const [order, setOrder] = React.useState();
  const [currentPage, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  const handleSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  return (
    <div>
      <StyledTable>
        <TableHeader
            headers={headers}
            order={order}
            orderBy={orderBy}
            onSort={handleSort}
            sticky />
        <TableBody
            headers={headers}
            data={data}
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            page={currentPage} />
      </StyledTable>
      {
        paginated && (
          <PaginationToolbar
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
  data: [],
  paginated: false,
  rowsPerPageOptions: [],
};

export default Table;
