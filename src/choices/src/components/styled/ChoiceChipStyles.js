import { css } from 'styled-components';

import { NEUTRAL, PURPLE } from '../../../../colors';

// Not really sure why, but 1px box-shadow looks significantly larger than 1px on chrome
// Using fractional pixel seems to look closer to intended design

const ChoiceChipStyles = css`
  align-items: center;
  background-color: ${NEUTRAL.N50};
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 16px;
  color: ${NEUTRAL.N900};
  display: flex;
  flex-direction: column;
  height: 32px;
  justify-content: center;
  padding: 10px 12px;
  text-align: center;
  user-select: none;

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

  input:focus-visible ~ & {
    box-shadow: ${NEUTRAL.N400} 0 0 0 0.1px;
  }
  input:checked:focus-visible ~ & {
    box-shadow: ${PURPLE.P300} 0 0 0 0.1px;
  }

  input:disabled ~ & {
    background-color: ${NEUTRAL.N00};
    color: ${NEUTRAL.N500};
    cursor: not-allowed;
  }

  input:checked:disabled ~ & {
    background-color: ${NEUTRAL.N400};
    color: ${NEUTRAL.N900};
    cursor: not-allowed;
  }

  input[readonly] ~ & {
    cursor: default;
    pointer-events: none;
  }
`;

export default ChoiceChipStyles;
