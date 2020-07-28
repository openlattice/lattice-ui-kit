import { css } from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../colors';

const choiceIndicatorStyles = css`
  input:hover ~ & {
    background-color: ${NEUTRAL.N200};
  }

  input:focus ~ & {
    box-shadow: ${PURPLE.P400} 0 0 0 2px;
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLE.P300};
  }

  input:checked:hover ~ & {
    background-color: ${PURPLE.P400};
  }

  input:disabled ~ & {
    background-color: ${NEUTRAL.N50};
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    cursor: not-allowed;
    background-color: ${NEUTRAL.N200};
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default choiceIndicatorStyles;
