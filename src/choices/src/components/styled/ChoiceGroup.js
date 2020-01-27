import styled from 'styled-components';

const ChoiceGroup = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  flex-wrap: wrap;
`;

export default ChoiceGroup;
