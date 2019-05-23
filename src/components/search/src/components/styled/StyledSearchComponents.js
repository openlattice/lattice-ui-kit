// @flow
import styled, { css } from 'styled-components';

type InputGridProps = {
  columns ? :number;
  align ? :string;
}

const getGridTemplateColumns = ({ columns = 4 } :InputGridProps) => css`
  grid-template-columns: repeat(${columns}, minmax(100px, 1fr));
`;

const getAlignItems = ({ align } :InputGridProps) => css`
  align-items: ${align || 'flex-start'};
`;

const InputGrid = styled.div`
  display: grid;
  flex: 1 1 100%;
  grid-gap: 20px 30px;
  ${getAlignItems}
  ${getGridTemplateColumns}
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

export {
  InputGrid,
  Title
};
