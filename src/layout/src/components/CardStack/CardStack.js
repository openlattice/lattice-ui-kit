// @flow

import styled from 'styled-components';

const CardStack = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > div {
    margin: 10px 0;
  }

  & > div:first-child {
    margin-top: 0;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;

export default CardStack;
