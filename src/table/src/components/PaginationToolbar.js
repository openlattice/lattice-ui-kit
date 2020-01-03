import { PaginationWrapper, RowPerPageWrapper } from './styled';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '../../../button';
import Label from '../../../label';
// @flow
import React from 'react';
import { Select } from '../../../select';
import { getRowsPerPageOptions } from './TableUtils';

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

  const maxRowNumber = Math.min(rowsPerPage * (page + 1), count);
  const minRowNumber = Math.min(rowsPerPage * page + 1, count);
  const rowRange = `${minRowNumber} - ${maxRowNumber} of ${count}`;

  const getPageChanger = (increment :number) => (event :SyntheticEvent<HTMLButtonElement>) => {
    const newPage = page + increment;
    onPageChange({
      page: newPage,
      rowsPerPage,
      start: Math.min(rowsPerPage * newPage, count)
    }, event);
  };

  const handleRowsPerPage = (rows, event) => {
    onPageChange({
      page: 0,
      rowsPerPage: rows,
      start: 0
    }, event);
  };

  return (
    <PaginationWrapper>
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
