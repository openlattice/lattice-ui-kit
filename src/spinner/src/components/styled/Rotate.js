import styled from 'styled-components';

const Rotate = styled.span`
  animation: fa-spin ${({ duration }) => (duration || '0.75s')} infinite linear;
  align-self: ${({ centered }) => (centered ? 'center' : 'flex-start')};
`;

export default Rotate;
