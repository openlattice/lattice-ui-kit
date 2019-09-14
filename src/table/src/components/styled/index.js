// @flow
import styled from 'styled-components';

import { NEUTRALS, WHITE } from '../../../../colors';
import { getStickyPosition } from '../../../../utils/StyleUtils';

const StyledTable = styled.table`
  background-color: ${WHITE};
  border-collapse: collapse;
  border: none;
  table-layout: fixed;
  width: 100%;
`;

const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Cell = styled.td((props :Object) => ({
  backgroundColor: props.as === 'th' ? NEUTRALS[6] : 'inherit',
  cursor: props.onClick ? 'pointer' : 'auto',
  padding: '10px 10px',
  textAlign: 'left',
  wordWrap: 'break-word',
  ...props.cellStyle
}));

Cell.displayName = 'Cell';

const StyledRow = styled.tr`
  background-color: ${WHITE};
  border-bottom: 1px solid ${NEUTRALS[4]};

  /* position: sticky doesn't work with thead/tr. Move to all cells within */
  td, th {
    ${getStickyPosition}
  };
`;

const RowPerPageWrapper = styled.div`
  font-size: 14px;
  margin-right: 10px;
  width: 75px;
`;

export {
  Cell,
  PaginationWrapper,
  RowPerPageWrapper,
  StyledRow,
  StyledTable,
};
