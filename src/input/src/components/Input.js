// @flow

import styled from 'styled-components';

import { NEUTRALS, PURPLES, RED_1 } from '../../../colors';

const Input = styled.input`
  background-color: ${NEUTRALS[8]}
  border-radius: 3px;
  border: 1px solid ${props => (props.invalid ? RED_1 : NEUTRALS[4])};
  box-shadow: 0;
  box-sizing: border-box;
  color: ${NEUTRALS[0]};
  display: flex;
  flex: 0 1 auto;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 10px;
  text-overflow: ellipsis;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  width: 100%;

  :hover {
    background-color: ${NEUTRALS[6]};
  }

  :focus {
    border: solid 1px ${PURPLES[1]};
    background-color: white;
    outline: none;
  }

  :disabled {
    background-color: ${NEUTRALS[8]};
    color: ${NEUTRALS[1]};
    cursor: not-allowed;
  }
`;

export default Input;
