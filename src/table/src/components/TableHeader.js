// @flow
import React from 'react';
import isFunction from 'lodash/isFunction';

import { StyledRow } from './styled';
import type { SortOrder } from '../../types';

type Props = {
  className ? :string;
  components :Object;
  headers ? :Object[];
  onSort ? :(event :SyntheticEvent<HTMLElement>, property :string) => void;
  order ? :SortOrder;
  orderBy ? :string;
  sticky ? :boolean;
};


const TableHeader = (props :Props) => {
  const {
    components,
    className,
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
    <thead className={className}>
      <StyledRow sticky={sticky}>
        {
          headers && headers.map((header) => {
            const { key, label, cellStyle } = header;
            return (
              <components.HeadCell
                  key={key}
                  components={components}
                  cellStyle={cellStyle}
                  onClick={onSort ? createSortHandler(key) : undefined}
                  order={orderBy === header.key ? order : false}
                  sortable>
                {label}
              </components.HeadCell>
            );
          })
        }
      </StyledRow>
    </thead>
  );
};

TableHeader.defaultProps = {
  className: undefined,
  headers: [],
  onSort: undefined,
  order: false,
  orderBy: undefined,
  sticky: true,
};

export default TableHeader;
