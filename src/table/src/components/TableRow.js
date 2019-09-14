// @flow

import React from 'react';
import { StyledRow } from './styled';

type Props = {
  components :Object;
  data :Object;
  headers :Object;
};

const TableRow = (props :Props) => {
  const { components, data, headers } = props;

  const { id } = data;

  const cells = headers
    .map((header) => <components.Cell key={`${id}_cell_${header.key}`}>{data[header.key]}</components.Cell>);

  return (
    <StyledRow>
      {cells}
    </StyledRow>
  );
};

export default TableRow;
