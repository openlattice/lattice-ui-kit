// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Node } from 'react';
import { faSort, faSortUp, faSortDown } from '@fortawesome/pro-duotone-svg-icons';

import { Cell } from './styled';
import type { SortOrder } from '../../types';

type Props = {
  cellStyle ? :Object;
  children :Node;
  className ? :string;
  onClick ? :(e :SyntheticEvent<HTMLElement>) => void;
  order ? :SortOrder;
  sortable ? :boolean;
};

const HeadCell = (props :Props) => {
  const {
    cellStyle,
    children,
    className,
    onClick,
    order,
    sortable,
  } = props;

  let icon = faSort;
  if (order === 'asc') icon = faSortUp;
  if (order === 'desc') icon = faSortDown;

  const sortText = `Sort (${order === 'asc' ? 'Ascending' : 'Descending'})`;

  return (
    <Cell
        as="th"
        cellStyle={cellStyle}
        className={className}
        onClick={onClick}>
      {children}
      { (sortable) && <span aria-label={sortText}><FontAwesomeIcon icon={icon} fixedWidth /></span> }
    </Cell>
  );

};

HeadCell.defaultProps = {
  cellStyle: {},
  className: undefined,
  onClick: undefined,
  order: false,
  sortable: false,
};

export default HeadCell;
