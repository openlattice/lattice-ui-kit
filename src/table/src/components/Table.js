// @flow

import React, { useState } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import { StyledTable } from './styled';
import usePagination from './usePagination';

type Props = {
  data :Array<Object>;
  headers :Array<Object>;
  rowsPerPage :number;
};

const Table = (props :Props) => {

  const {
    data,
    headers,
    rowsPerPage,
  } = props;

  const [orderBy, setOrderBy] = useState();
  const [order, setOrder] = useState();
  const [currentPage, setPage, nextPage, prevPage] = usePagination(0, Math.ceil(data.length / rowsPerPage));

  const handleSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  return (
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
      <TableFooter
          page={currentPage}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          nextPage={nextPage}
          prevPage={prevPage} />
    </StyledTable>
  );
};

export default Table;
