// @flow

import styled from 'styled-components';

import { Checkbox } from '../../../choices';
import { NEUTRAL } from '../../../colors';
import { getHoverStyles } from '../../../utils/StyleUtils';

const CustomRowWrapper = styled.tr.attrs(() => ({ tabIndex: '1' }))`
  border-bottom: 1px solid ${NEUTRAL.N100};

  ${getHoverStyles};
`;

const CellContent = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledCell = styled.td`
  padding: 10px 10px;
  text-align: ${(props) => props.align || 'left'};
  word-wrap: break-word;
`;

type Props = {
  data :Object;
};

const CustomRow = (props :Props) => {
  const { data } = props;

  return (
    <CustomRowWrapper onClick={() => {}}>
      <StyledCell>
        <CellContent>
          {data.name}
        </CellContent>
      </StyledCell>
      <StyledCell>
        <CellContent>
          {data.dob}
        </CellContent>
      </StyledCell>
      <StyledCell>
        <Checkbox defaultChecked={data.manager} />
      </StyledCell>
      <StyledCell>
        <CellContent>
          {data.lastUpdated}
        </CellContent>
      </StyledCell>
      <StyledCell>
        <CellContent>
          {data.id}
        </CellContent>
      </StyledCell>
    </CustomRowWrapper>
  );
};

export default CustomRow;
