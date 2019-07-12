// @flow
import React from 'react';
import type { ChildrenArray } from 'react';

import { StepDivider, StepperWrapper } from './styled';

type Props = {
  activeStep :number;
  children :ChildrenArray<any>;
};

const Stepper = ({ activeStep = 0, children } :Props) => {
  const steps = React.Children.toArray(children).map((child, index) => {

    const state = {
      active: activeStep === index,
      complete: activeStep > index,
      disabled: activeStep < index,
      index,
    };

    return [
      index !== 0 && <StepDivider />,
      React.cloneElement(child, state)
    ];
  });

  return (
    <StepperWrapper>
      {steps}
    </StepperWrapper>
  );
};

export default Stepper;
