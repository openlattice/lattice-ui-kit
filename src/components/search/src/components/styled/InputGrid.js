import styled, { css } from 'styled-components';

const getGridTemplateColumns = ({ columns = 4 }) => css`
  grid-template-columns: repeat(${columns}, minmax(100px, 1fr));
`;

const InputGrid = styled.div`
  display: grid;
  grid-gap: 20px 30px;
  align-items: flex-end;
  ${getGridTemplateColumns}
`;

export default InputGrid;
