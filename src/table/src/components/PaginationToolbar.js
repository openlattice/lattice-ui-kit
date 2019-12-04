// @flow
import React from 'react';
import isFunction from 'lodash/isFunction';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PaginationWrapper, RowPerPageWrapper } from './styled';
import { getRowsPerPageOptions } from './TableUtils';
import { Select } from '../../../select';
import { IconButton } from '../../../button';
import Label from '../../../label';

type Props = {
  count :number;
  onPageChange ?:({
    page :number,
    start :number,
    rowsPerPage :number
  }) => void;
  page :number;
  rowsPerPage :number;
  rowsPerPageOptions ? :number[];
  setPage :(number :number) => void;
  setRowsPerPage :(number :number) => void;
};

const PaginationToolbar = (props :Props) => {
  const {
    count,
    onPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions,
    setPage,
    setRowsPerPage,
  } = props;

  const options = getRowsPerPageOptions(rowsPerPageOptions, count);
  const lastPage = Math.floor(count / rowsPerPage) - Number(!(count % rowsPerPage));

  const maxRowNumber = Math.min(rowsPerPage * (page + 1), count);
  const minRowNumber = Math.min(rowsPerPage * page + 1, count);
  const rowRange = `${minRowNumber} - ${maxRowNumber} of ${count}`;

  const getPageChanger = (increment :number) => () => {
    const newPage = page + increment;
    setPage(newPage);
    if (isFunction(onPageChange)) {
      onPageChange({
        page: newPage,
        start: Math.min(rowsPerPage * newPage, count),
        rowsPerPage,
      });
    }
  };

  const handleRowsPerPage = (rows) => {
    setPage(0);
    setRowsPerPage(rows);
    if (isFunction(onPageChange)) {
      onPageChange({
        page: 0,
        start: 0,
        rowsPerPage: rows
      });
    }
  };

  return (
    <PaginationWrapper>
      <Label subtle>Rows per page</Label>
      {
        (options.length > 1) && (
          <RowPerPageWrapper>
            <Select
                borderless
                defaultValue={options[0]}
                onChange={handleRowsPerPage}
                options={options}
                value={rowsPerPage}
                useRawValues />
          </RowPerPageWrapper>
        )
      }
      <Label id="row-range" subtle>{rowRange}</Label>
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronLeft} fixedWidth />}
          disabled={page <= 0}
          onClick={getPageChanger(-1)} />
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronRight} fixedWidth />}
          disabled={page >= lastPage}
          onClick={getPageChanger(1)} />
    </PaginationWrapper>
  );
};

PaginationToolbar.defaultProps = {
  count: 0,
  onPageChange: undefined,
  page: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: [],
};

// $FlowFixMe
export default React.memo(PaginationToolbar);
