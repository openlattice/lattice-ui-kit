import { css } from 'styled-components';

import {
  defaultActive,
  defaultDisabled,
  defaultHover,
  defaultStyle,
} from '../../../../button/src/components/styled/DefaultButtonStyles';
import { PURPLES } from '../../../../colors';

const choiceButtonStyles = css`
  align-items: center;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  min-height: 40px;
  justify-content: center;
  min-width: 84px;
  padding: 10px 12px;
  text-align: center;
  width: 100%;
  ${defaultStyle}

  input:hover ~ & {
    ${defaultHover}
  }

  input:active ~ & {
    ${defaultActive};
  }

  input:focus ~ & {
    box-shadow: ${PURPLES[1]} 0 0 0 2px;
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLES[6]};
    border: solid 1px ${PURPLES[1]};
    color: ${PURPLES[1]};
  }

  input:checked:hover ~ & {
    background-color: ${PURPLES[5]};
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
