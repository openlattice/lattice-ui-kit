import React from 'react';
import styled from 'styled-components';
import Spinner from '../../../../spinner';

const SpinnerWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonSpinner = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default ButtonSpinner;
