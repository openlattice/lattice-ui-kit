// @flow
import styled from 'styled-components';

const Content = styled.span`
  flex: 1 1 auto;
  opacity: ${props => (props.isLoading ? 0 : 1)};
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.3s;
  white-space: nowrap;
`;

export default Content;
