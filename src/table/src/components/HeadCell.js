// @flow
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Node } from 'react';
import { faSort, faSortUp, faSortDown } from '@fortawesome/pro-duotone-svg-icons';

import { Cell } from './styled';
import type { SortOrder } from '../../types';

type Props = {
  children :Node;
  onClick ? :(e :SyntheticEvent<HTMLElement>) => void;
  order ? :SortOrder;
  sortable ? :boolean;
};

const HeadCell = (props :Props) => {
  const {
    children,
    onClick,
    order,
    sortable
  } = props;

  let icon = faSort;
  if (order === 'asc') icon = faSortUp;
  if (order === 'desc') icon = faSortDown;

  return (
    <Cell as="th" onClick={onClick}>
      {children}
      { (sortable) && <span><FontAwesomeIcon icon={icon} fixedWidth /></span> }
    </Cell>
  );

};

HeadCell.defaultProps = {
  onClick: undefined,
  order: false,
  sortable: false,
};

export default HeadCell;
