import styled from 'styled-components';
import { NEUTRALS } from '../../../../colors';
import { getStickyPosition } from '../../../../utils/StyleUtils';

const Table = styled.table`
  background-color: ${NEUTRALS[6]};
  border-collapse: collapse;
  border: none;
  table-layout: fixed;
  width: 100%;
`;

Table.displayName = 'Table';

const Cell = styled.td`
  padding: 10px 10px;
  word-wrap: break-word;
`;

Cell.displayName = 'Cell';

const TableRow = styled.tr`
  height: 40px;
  background-color: white;
  border-bottom: 1px solid ${NEUTRALS[4]};

  ${Cell} {
    ${getStickyPosition}
  }
`;

TableRow.displayName = 'TableRow';

const HeadCell = styled(Cell).attrs(() => ({
  as: 'th'
}))``;

HeadCell.displayName = 'HeadCell';

const TableHead = styled.thead`
  ${TableRow} {
    ${Cell} {
      background-color: ${NEUTRALS[6]};
      border-bottom: 2px solid ${NEUTRALS[3]};
      text-align: left;
      font-weight: 600;
      height: 18px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  };
`;

TableHead.displayName = 'TableHead';

const TableBody = styled.tbody``;

TableBody.displayName = 'TableBody';

export {
  Cell,
  HeadCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
};
