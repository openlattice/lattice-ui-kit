import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  &::before {
    animation: ${spin} 0.75s linear infinite;
    border: 1px solid #c5d5e5;
    border-radius: 50%;
    border-top-color: #135;
    box-sizing: border-box;
    content: '';
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px; /* half the height */
    margin-left: -25px; /* half the width */
    position: absolute;
  }
`;

export default Spinner;
