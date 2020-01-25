import styled, { css } from 'styled-components';

const getChoiceSize = ({ mode }) => {
  if (mode === 'button') {
    return css`
      width: 100%;
      height: 100%;
    `;
  }

  return null;
};


const ChoiceWrapper = styled.span`
  align-items: stretch;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  ${getChoiceSize};
`;

const ChoiceInnerWrapper = styled.span`
  display: flex;
  flex: 1;
`;

export {
  ChoiceInnerWrapper,
  ChoiceWrapper,
};
