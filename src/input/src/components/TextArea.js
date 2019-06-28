// @flow

import styled from 'styled-components';
import inputStyles from './styled/inputStyles';

const TextArea = styled.textarea`
  ${inputStyles}
  height: 100px;
  resize: vertical;
  width: 100%;
`;

export default TextArea;
