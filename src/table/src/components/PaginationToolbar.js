// @flow
import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PaginationWrapper, RowPerPageWrapper } from './styled';
import { getRowsPerPageOptions } from './TableUtils';
import { Select } from '../../../select';
import { IconButton } from '../../../button';
import Label from '../../../label';

type Props = {
  count :number;
  page :number;
  rowsPerPage :number;
  rowsPerPageOptions ? :number[];
  setPage :(number :number) => void;
  setRowsPerPage :(number :number) => void;
};

const PaginationToolbar = (props :Props) => {
  const {
    count,
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

  return (
    <PaginationWrapper>
      <Label subtle>Rows per page</Label>
      {
        (options.length > 1) && (
          <RowPerPageWrapper>
            <Select
                borderless
                defaultValue={options[0]}
                onChange={(rows) => {
                  setPage(0);
                  setRowsPerPage(rows);
                }}
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
          onClick={() => setPage(page - 1)} />
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronRight} fixedWidth />}
          disabled={page >= lastPage}
          onClick={() => setPage(page + 1)} />
    </PaginationWrapper>
  );
};

PaginationToolbar.defaultProps = {
  count: 0,
  page: 0,
  rowsPerPage: 5,
  rowsPerPageOptions: []
};

// $FlowFixMe
export default React.memo(PaginationToolbar);
