import styled from 'styled-components';
import { APP_CONTAINER_MIN_WIDTH } from '../../../../style/Sizes';

const AppContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  min-width: ${APP_CONTAINER_MIN_WIDTH}px;
  padding: 0;
`;

export default AppContainerWrapper;
