import styled from 'styled-components';

import { NEUTRAL } from '../../../../colors';

const ChoiceLabel = styled.label`
  align-items: center;
  color: ${(props) => (props.disabled ? NEUTRAL.N500 : NEUTRAL.N900)};
  display: inline-flex;
  font-size: 14px;
  min-height: 40px;
  pointer-events: ${(props) => (props.readOnly ? 'none' : 'auto')};
  position: relative;
  vertical-align: middle;
`;

export default ChoiceLabel;
