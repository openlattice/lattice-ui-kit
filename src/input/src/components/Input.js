import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  flex: 0 1 auto;
  box-sizing: border-box;
  background: #f9f9fd url(${props => (props.icon ? props.icon : null)}) no-repeat center right 10px;
  border-radius: 3px;
  border: solid 1px #dcdce7;
  box-shadow: 0;
  color: #2e2e34;
  font-size: 14px;
  height: 39px;
  line-height: 19px;
  padding: ${props => (props.icon ? '0px 32px 0px 10px' : '0px 10px')};
  text-overflow: ellipsis;
  width: 100%;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  :hover {
    background-color: #f0f0f7;
    border: solid 1px #dcdce7;
  }

  :focus {
    border: solid 1px #6124e2;
    background-color: white;
    outline: none;
  }

  :disabled {
    background-color: #f9f9fd;
    color: #8e929b;
    cursor: not-allowed;
  }
`;

export default Input;
