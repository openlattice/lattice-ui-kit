// @flow
import React from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PaginationWrapper, RowPerPageWrapper } from './styled';
import { Select } from '../../../select';
import { IconButton } from '../../../button';
import Label from '../../../label';

type Props = {
  count :number;
  page :number;
  rowsPerPage :number;
  rowsPerPageOptions :number[];
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

  const options = rowsPerPageOptions.map((option) => ({ label: option, value: option }));
  const lastPage = Math.floor(count / rowsPerPage);

  const maxRowNumber = Math.min(rowsPerPage * (page + 1), count);
  const minRowNumber = Math.min(rowsPerPage * Math.max(page) + 1, count);
  const rowRange = `${minRowNumber} - ${maxRowNumber} of ${count}`;

  return (
    <PaginationWrapper>
      <Label subtle>Rows per page</Label>
      <RowPerPageWrapper>
        <Select
            borderless
            defaultValue={options[0]}
            onChange={(rows) => setRowsPerPage(rows)}
            options={options}
            useRawValues />
      </RowPerPageWrapper>
      <Label subtle>{rowRange}</Label>
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronLeft} fixedWidth />}
          disabled={page === 0}
          onClick={() => setPage(page - 1)} />
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronRight} fixedWidth />}
          disabled={page === lastPage}
          onClick={() => setPage(page + 1)} />
    </PaginationWrapper>
  );
};

export default React.memo<Props>(PaginationToolbar);
