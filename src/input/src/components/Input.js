import styled from 'styled-components';
import { NEUTRALS, PURPLES, RED_1 } from '../../../colors';

const Input = styled.input`
  display: flex;
  flex: 0 1 auto;
  box-sizing: border-box;
  background: ${NEUTRALS[8]} url(${props => (props.icon ? props.icon : null)}) no-repeat center right 10px;
  border-radius: 3px;
  border: solid 1px ${props => (props.invalid ? RED_1 : NEUTRALS[4])};
  box-shadow: 0;
  color: ${NEUTRALS[0]};
  font-size: 14px;
  height: 39px;
  line-height: 19px;
  padding: ${props => (props.icon ? '0px 32px 0px 10px' : '0px 10px')};
  text-overflow: ellipsis;
  width: 100%;
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
