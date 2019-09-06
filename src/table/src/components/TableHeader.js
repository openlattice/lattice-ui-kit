// @flow
import React from 'react';
import isFunction from 'lodash/isFunction';
import { TableRow } from './styled';
import HeadCell from './HeadCell';
import type { SortOrder } from '../../types';

type Props = {
  headers ? :Object[];
  order ? :SortOrder;
  orderBy ? :string;
  onSort ? :(event :SyntheticEvent<HTMLElement>, property :string) => void;
  sticky ? :boolean;
};


const TableHeader = (props :Props) => {
  const {
    headers,
    onSort,
    order,
    orderBy,
    sticky,
  } = props;

  const createSortHandler = (property :string) => (event :SyntheticEvent<HTMLElement>) => {
    if (isFunction(onSort)) {
      onSort(event, property);
    }
  };

  return (
    <thead>
      <TableRow sticky={sticky}>
        {
          headers && headers.map((header) => {
            const { key, label } = header;
            return (
              <HeadCell
                  key={key}
                  onClick={onSort ? createSortHandler(key) : undefined}
                  order={orderBy === header.key ? order : false}>
                {label}
              </HeadCell>
            );
          })
        }
      </TableRow>
    </thead>
  );
};

TableHeader.defaultProps = {
  headers: [],
  onSort: undefined,
  order: false,
  orderBy: undefined,
  sticky: true,
};

export default TableHeader;
