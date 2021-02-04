// @flow

import { StyledRow } from './styled';
import type { RowData } from '../../types';

type Props = {
  className ? :string;
  components :Object;
  data :RowData;
  headers :Object[];
};

const TableRow = (props :Props) => {
  const {
    className,
    components,
    data,
    headers
  } = props;

  const { id } = data;

  const cells = headers
    .map((header) => <components.Cell key={`${id}_cell_${header.key}`}>{data[header.key]}</components.Cell>);

  return (
    <StyledRow className={className}>
      {cells}
    </StyledRow>
  );
};

TableRow.defaultProps = {
  className: undefined
};

export default TableRow;
