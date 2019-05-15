// @flow
import styled, { css } from 'styled-components';

type Props = {
  columns ? :number;
  align ? :string;
}

const getGridTemplateColumns = ({ columns = 4 } :Props) => css`
  grid-template-columns: repeat(${columns}, minmax(100px, 1fr));
`;

const getAlignItems = ({ align } :Props) => css`
  align-items: ${align || 'flex-start'};
`;

const InputGrid = styled.div`
  display: grid;
  flex: 1 1 100%;
  grid-gap: 20px 30px;
  ${getAlignItems}
  ${getGridTemplateColumns}
`;

export default InputGrid;
