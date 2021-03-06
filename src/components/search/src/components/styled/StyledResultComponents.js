// @flow
import styled, { css } from 'styled-components';

const ResultGrid = styled.div`
  display: grid;
  flex: 1;
  grid-auto-flow: row;
  grid-template-columns: ${(props) => props.columns && css`repeat(${props.columns}, minmax(0, 1fr))`};
  grid-gap: 20px 30px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const ResultDetails = styled.div`
  padding: 10px 30px;
  flex: 1;
`;

const getTruncatedStyles = (props :any) => {
  const { truncate } = props;
  if (truncate) {
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }
  return css`
    word-break: break-word;
  `;
};

const Text = styled.div`
  ${getTruncatedStyles};
`;

const Image = styled.img`
  height: 100%;
  width: 100px;
`;

export {
  Image,
  ResultGrid,
  ResultWrapper,
  ResultDetails,
  Text,
};
