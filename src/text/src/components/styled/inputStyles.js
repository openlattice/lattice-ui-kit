import { css } from 'styled-components';

import {
  NEUTRALS,
  PURPLE,
  RED_1
} from '../../../../colors';
import { duration } from '../../../../style/transitions';

const inputStyles = css`
  background-color: ${NEUTRALS[8]};
  border-radius: 3px;
  border: 1px solid ${(props) => (props.invalid ? RED_1 : NEUTRALS[4])};
  box-shadow: none;
  box-sizing: border-box;
  color: ${NEUTRALS[0]};
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
    background-color: ${NEUTRALS[6]};
  }

  :focus {
    border: solid 1px ${PURPLE.P300};
    background-color: white;
    outline: none;
  }

  :disabled {
    background-color: ${NEUTRALS[8]};
    color: ${NEUTRALS[1]};
    cursor: not-allowed;
  }
`;

export default inputStyles;
