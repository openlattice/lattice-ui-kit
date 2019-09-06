import styled from 'styled-components';
import { NEUTRALS } from '../../../../colors';
import { getStickyPosition } from '../../../../utils/StyleUtils';

const StyledTable = styled.table`
  background-color: ${NEUTRALS[6]};
  border-collapse: collapse;
  border: none;
  table-layout: fixed;
  width: 100%;
`;

const Cell = styled.td`
  padding: 10px 10px;
  word-wrap: break-word;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'auto')};
  text-align: left;

  background-color: ${(props) => (props.as === 'th' ? NEUTRALS[6] : 'inherit')};
`;

Cell.displayName = 'Cell';

const TableRow = styled.tr`
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${NEUTRALS[4]};

  /* position: sticky doesn't work with thead/tr. Move to all cells within */
  ${Cell} {
    ${getStickyPosition}
  };
`;

TableRow.displayName = 'TableRow';

export {
  Cell,
  StyledTable,
  TableRow,
};
