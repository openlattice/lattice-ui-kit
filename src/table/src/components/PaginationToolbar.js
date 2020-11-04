// @flow
import React from 'react';

import { Pagination } from '@material-ui/lab';

import { getRowsPerPageOptions } from './TableUtils';
import { PaginationWrapper, RowPerPageWrapper } from './styled';

import Label from '../../../label';
import { Select } from '../../../select';

type Props = {
  count :number;
  onPageChange :({
    page :number,
    rowsPerPage :number
  }, event :SyntheticEvent<HTMLButtonElement>) => void;
  page :number;
  rowsPerPage :number;
  rowsPerPageOptions ? :number[];
};

const PaginationToolbar = (props :Props) => {
  const {
    count,
    onPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions,
  } = props;

  const options = getRowsPerPageOptions(rowsPerPageOptions, count);
  const lastPage = Math.floor(count / rowsPerPage) - Number(!(count % rowsPerPage));

  const handleRowsPerPage = (rows, event) => {
    onPageChange({
      page: 1,
      rowsPerPage: rows,
      start: 0
    }, event);
  };

  const handlePaginationChange = (event :SyntheticEvent<HTMLButtonElement>, newPage :number) => {
    onPageChange({
      page: newPage,
      rowsPerPage,
      start: Math.min(rowsPerPage * newPage, count)
    }, event);
  };

  return (
    <PaginationWrapper>
      {
        (options.length > 1) && (
          <>
            <Label subtle>Rows per page</Label>
            <RowPerPageWrapper>
              <Select
                  borderless
                  defaultValue={options[0]}
                  onChange={handleRowsPerPage}
                  options={options}
                  value={rowsPerPage}
                  useRawValues />
            </RowPerPageWrapper>
          </>
        )
      }
      <Pagination
          count={lastPage + 1}
          onChange={handlePaginationChange}
          page={page}
          shape="rounded" />
    </PaginationWrapper>
  );
};

PaginationToolbar.defaultProps = {
  count: 0,
  onPageChange: undefined,
  page: 1,
  rowsPerPage: 5,
  rowsPerPageOptions: [],
};

// $FlowFixMe
export default React.memo(PaginationToolbar);
