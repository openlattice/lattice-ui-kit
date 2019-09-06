// @flow
import React from 'react';

type Props = {
  rowsPerPage :number;
  page :number;
  setPage :(pageNumber :number) => void;
  nextPage :() => void;
  prevPage :() => void;
};

const TableFooter = (props :Props) => {
  const {
    nextPage,
    page,
    prevPage,
    rowsPerPage,
    setPage,
  } = props;

  return (
    <tfoot>
      something
    </tfoot>
  );
};

export default TableFooter;
