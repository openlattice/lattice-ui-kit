import styled from 'styled-components';

const Rotate = styled.span`
  animation: fa-spin ${({ duration }) => (duration || '0.75s')} infinite linear;
`;

export default Rotate;
