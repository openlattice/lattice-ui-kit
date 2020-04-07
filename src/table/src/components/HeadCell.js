// @flow
import React from 'react';
import type { Node } from 'react';

import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  let sortIcon;
  if (order === 'asc') sortIcon = faSortUp;
  if (order === 'desc') sortIcon = faSortDown;

  return (
    <Cell
        as="th"
        cellStyle={cellStyle}
        className={className}
        onClick={onClick}>
      {children}
      {
        (sortable) && (
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={faSort} fixedWidth style={{ opacity: '0.4' }} />
            { (sortIcon) && <FontAwesomeIcon icon={sortIcon} fixedWidth /> }
          </span>
        )
      }
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
