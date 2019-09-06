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
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const Cell = styled.td`
  padding: 10px 10px;
  word-wrap: break-word;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'auto')};
  text-align: left;
  height: ${(props) => props.height || null};
  background-color: ${(props) => (props.as === 'th' ? NEUTRALS[6] : 'inherit')};
`;

Cell.displayName = 'Cell';

const TableRow = styled.tr`
  background-color: ${WHITE};
  border-bottom: 1px solid ${NEUTRALS[4]};

  /* position: sticky doesn't work with thead/tr. Move to all cells within */
  ${Cell} {
    ${getStickyPosition}
  };
`;

TableRow.displayName = 'TableRow';

const RowPerPageWrapper = styled.div`
  font-size: 14px;
  width: 75px;
  margin-right: 10px;
`;

export {
  Cell,
  PaginationWrapper,
  RowPerPageWrapper,
  StyledTable,
  TableRow,
};
