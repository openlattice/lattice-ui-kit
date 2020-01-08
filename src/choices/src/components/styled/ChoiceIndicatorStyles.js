import { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../../colors';

const choiceIndicatorStyles = css`
  input:hover ~ & {
    background-color: ${NEUTRALS[1]};
  }

  input:focus-visible ~ & {
    box-shadow: ${PURPLES[0]} 0 0 0 2px;
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLES[2]};
  }

  input:checked:hover ~ & {
    background-color: ${PURPLES[1]};
  }

  input:disabled ~ & {
    background-color: ${PURPLES[6]};
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    cursor: not-allowed;
    background-color: ${NEUTRALS[2]};
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default choiceIndicatorStyles;
