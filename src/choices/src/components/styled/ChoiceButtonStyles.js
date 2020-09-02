import { css } from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../colors';

const choiceButtonStyles = css`
  align-items: center;
  background-color: ${NEUTRAL.N50};
  border-radius: 3px;
  color: ${NEUTRAL.N900};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 40px;
  min-width: 84px;
  padding: 10px 12px;
  text-align: center;
  width: 100%;

  input:focus-visible ~ &,
  input:hover ~ & {
    background-color: ${NEUTRAL.N100};
    cursor: pointer;
  }

  input:checked ~ &,
  input[readonly]:checked:disabled ~ &,
  input[readonly]:checked:hover ~ & {
    background-color: ${PURPLE.P00};
    color: ${PURPLE.P300};
  }

  input:disabled ~ & {
    background-color: ${NEUTRAL.N00};
    color: ${NEUTRAL.N500};
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    background-color: ${NEUTRAL.N400};
    color: white;
    cursor: not-allowed;
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default choiceButtonStyles;
