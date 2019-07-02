// @flow

import styled from 'styled-components';
import inputStyles from './styled/inputStyles';

const TextArea = styled.textarea`
  height: 100px;
  resize: vertical;
  ${inputStyles}
`;

export default TextArea;
