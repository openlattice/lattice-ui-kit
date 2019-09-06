// @flow
import { useState } from 'react';

function usePagination(initialPage :number = 0, maxPages :number) {
  const [currentPage, setPage] = useState<number>(initialPage);

  if (
    (initialPage > maxPages)
    || (initialPage < 0)
  ) {
    throw new RangeError('initialPage must be between 0 and maxPages');
  }

  const nextPage = () => {
    if (currentPage < maxPages - 1) {
      setPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setPage(currentPage - 1);
    }
  };

  return [currentPage, setPage, nextPage, prevPage];
}

export default usePagination;
