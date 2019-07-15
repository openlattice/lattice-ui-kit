import { css } from 'styled-components';
import { NEUTRALS, PURPLES } from '../../../../colors';

const choiceIndicatorStyles = css`
  input:hover ~ & {
    background-color: ${NEUTRALS[1]};
  }

  input:focus-visible ~ & {
    box-shadow: ${PURPLES[0]} 0 0 0 2px;
  }

  input:checked ~ & {
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
    background-color: ${NEUTRALS[2]};
  }
`;

export default choiceIndicatorStyles;
