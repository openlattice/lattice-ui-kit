import { css } from 'styled-components';

import {
  NEUTRAL,
  RED_1
} from '../../../../colors';
import { duration } from '../../../../style/transitions';

const inputStyles = css`
  background-color: ${NEUTRAL.N50};
  border-radius: 3px;
  border: 1px solid ${(props) => (props.invalid ? RED_1 : NEUTRAL.N50)};
  box-shadow: none;
  box-sizing: border-box;
  color: ${NEUTRAL.N900};
  display: flex;
  flex: 0 1 auto;
  font-size: 14px;
  min-height: 40px;
  padding: 10px;
  text-overflow: ellipsis;
  transition: background-color ${duration.standard} ease-out,
    border-color ${duration.standard} ease-out;
  width: ${(props) => (props.width || '100%')};

  :hover {
    background-color: ${NEUTRAL.N100};
  }

  :focus {
    border: solid 1px ${NEUTRAL.N700};
    background-color: ${NEUTRAL.N00};
    outline: none;
  }

  :disabled {
    background-color: ${NEUTRAL.N50};
    color: ${NEUTRAL.N500};
    cursor: not-allowed;
  }
`;

export default inputStyles;
