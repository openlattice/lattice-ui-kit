// @flow
import React from 'react';
import type { ChildrenArray } from 'react';

import { StepDivider, StepperWrapper } from './styled';

type Props = {
  activeStep :number;
  children :ChildrenArray<any>;
  vertical :boolean;
};

const Stepper = ({ activeStep = 0, children, vertical } :Props) => {
  const steps = React.Children.toArray(children).map((child, index) => {

    const state = {
      active: activeStep === index,
      complete: activeStep > index,
      disabled: activeStep < index,
      index,
    };

    return [
      index !== 0 && <StepDivider vertical={vertical} />,
      React.cloneElement(child, state)
    ];
  });

  return (
    <StepperWrapper vertical={vertical}>
      {steps}
    </StepperWrapper>
  );
};

export default Stepper;
