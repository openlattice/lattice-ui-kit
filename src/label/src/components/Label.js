import styled from 'styled-components';
import { NEUTRALS } from '../../../colors';

const Label = styled.label`
  display: inline-block;
  color: ${NEUTRALS[0]};
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  letter-spacing: normal;
  margin: 5px 0;
`;

export default Label;
