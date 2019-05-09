// @flow

import styled from 'styled-components';

import { NEUTRALS, PURPLES, RED_1 } from '../../../colors';

const Input = styled.input`
  display: flex;
  flex: 0 1 auto;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0;
  color: ${NEUTRALS[0]};
  font-size: 14px;
  height: 39px;
  line-height: inherit;
  text-overflow: ellipsis;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? RED_1 : NEUTRALS[4])};
  padding: 12px 10px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

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
