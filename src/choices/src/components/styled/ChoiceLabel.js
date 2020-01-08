import styled from 'styled-components';

import { NEUTRALS } from '../../../../colors';

const ChoiceLabel = styled.label`
  align-items: center;
  color: ${(props) => (props.disabled ? NEUTRALS[2] : NEUTRALS[0])};
  display: inline-flex;
  vertical-align: middle;
  pointer-events: ${(props) => (props.readOnly ? 'none' : 'auto')};
  position: relative;
  margin: 10px 10px 10px 0;
`;

export default ChoiceLabel;
