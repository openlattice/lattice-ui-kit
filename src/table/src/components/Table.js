// @flow

import React, { useState } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import PaginationToolbar from './PaginationToolbar';
import { StyledTable } from './styled';

type Props = {
  data :Array<Object>;
  headers :Array<Object>;
  rowsPerPageOptions :number[];
};

const Table = (props :Props) => {

  const {
    data,
    headers,
    rowsPerPageOptions,
  } = props;

  const [orderBy, setOrderBy] = useState();
  const [order, setOrder] = useState();
  const [currentPage, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

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
            data={data}
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            page={currentPage} />
      </StyledTable>
      <PaginationToolbar
          count={data.length}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage} />
    </div>
  );
};

export default Table;
