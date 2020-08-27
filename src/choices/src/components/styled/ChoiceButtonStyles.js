import { css } from 'styled-components';

import {
  defaultActive,
  defaultDisabled,
  defaultHover,
  defaultStyle,
} from '../../../../button/src/components/styled/DefaultButtonStyles';
import { PURPLE } from '../../../../colors';

const choiceButtonStyles = css`
  ${defaultStyle}
  align-items: center;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  justify-content: center;
  min-height: 40px;
  min-width: 84px;
  padding: 10px 12px;
  text-align: center;
  width: 100%;

  input:focus ~ &,
  input:hover ~ & {
    ${defaultHover}
  }

  input:active ~ & {
    ${defaultActive};
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLE.P00};
    color: ${PURPLE.P300};
  }

  input:checked:focus ~ &,
  input:checked:hover ~ & {
    background-color: ${PURPLE.P100};
  }

  input:checked:active ~ & {
    background-color: ${PURPLE.P200};
    color: ${PURPLE.P400};
  }

  input:disabled ~ & {
    ${defaultDisabled}
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    ${defaultActive}
    cursor: not-allowed;
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default choiceButtonStyles;
