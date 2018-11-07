/*
 * @flow
 */

import styled from 'styled-components';
import { NEUTRALS, PURPLES, WHITE } from '../../../../colors';

const StyledTextField = styled.input`
  background-color: ${NEUTRALS[8]};
  border: 1px solid ${NEUTRALS[4]};
  border-radius: 3px;
  color: #2e2e34;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: normal;
  outline: none;
  padding: 10px 20px;

  &:hover {
    background-color: ${NEUTRALS[6]};
  }

  &:disabled {
    background-color: ${NEUTRALS[8]};
    color: ${NEUTRALS[1]};
    cursor: not-allowed;
  }

  &:focus {
    background-color: ${WHITE};
    border-color: ${PURPLES[1]};
  }

  &::placeholder {
    color: ${NEUTRALS[1]};
  }
`;

const StyledTextAreaField = styled.textarea`
  background-color: ${NEUTRALS[8]};
  border: 1px solid ${NEUTRALS[4]};
  border-radius: 3px;
  color: #2e2e34;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: normal;
  outline: none;
  padding: 10px 20px;

  &:hover {
    background-color: ${NEUTRALS[6]};
  }

  &:disabled {
    background-color: ${NEUTRALS[8]};
    color: ${NEUTRALS[1]};
    cursor: not-allowed;
  }

  &:focus {
    background-color: ${WHITE};
    border-color: ${PURPLES[1]};
  }

  &::placeholder {
    color: ${NEUTRALS[1]};
  }
`;

export {
  StyledTextAreaField,
  StyledTextField,
};
