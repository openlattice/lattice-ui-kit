import styled from 'styled-components';

import { NEUTRALS } from '../../../../colors';

const ChoiceLabel = styled.label`
  align-items: center;
  color: ${(props) => (props.disabled ? NEUTRALS[2] : NEUTRALS[0])};
  display: inline-flex;
  font-size: 14px;
  min-height: 40px;
  pointer-events: ${(props) => (props.readOnly ? 'none' : 'auto')};
  position: relative;
  vertical-align: middle;
`;

export default ChoiceLabel;
