import styled from 'styled-components';

const ChoiceGroup = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: ${(props) => (props.row ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr')};
  flex-wrap: wrap;
`;

export default ChoiceGroup;
