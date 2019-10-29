import styled from 'styled-components';

const ChoiceWrapper = styled.span`
  align-items: center;
  display: inline-flex;
  height: 20px;
  justify-content: center;
  position: relative;
  vertical-align: middle;
  width: 20px;
  margin: 10px 10px 10px 0;
`;

const ChoiceInnerWrapper = styled.span`
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
`;

export {
  ChoiceInnerWrapper,
  ChoiceWrapper,
};
