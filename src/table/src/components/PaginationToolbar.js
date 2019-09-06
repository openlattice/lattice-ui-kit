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
  const maxPage = Math.ceil(count / rowsPerPage);

  return (
    <PaginationWrapper>
      <Label subtle>Rows per page</Label>
      <RowPerPageWrapper>
        <Select borderless useRawValues options={options} defaultValue={options[0]} onChange={setRowsPerPage} />
      </RowPerPageWrapper>
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronLeft} fixedWidth />}
          disabled={page === 0}
          onClick={() => setPage(page - 1)} />
      <IconButton
          mode="subtle"
          icon={<FontAwesomeIcon icon={faChevronRight} fixedWidth />}
          disabled={page === maxPage - 1}
          onClick={() => setPage(page + 1)} />
    </PaginationWrapper>
  );
};

export default PaginationToolbar;
