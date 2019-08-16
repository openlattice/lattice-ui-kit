import styled from 'styled-components';
import { NEUTRALS } from '../../../../colors';

const ChoiceLabel = styled.label`
  align-items: center;
  color: ${NEUTRALS[0]};
  display: inline-flex;
  margin: 10px 0;
  min-height: 20px;
  padding-left: 30px;
  pointer-events: ${(props) => (props.readOnly ? 'none' : 'auto')};
  position: relative;
`;

export default ChoiceLabel;
