// @flow
import React from 'react';
import type { ChildrenArray } from 'react';

import { StepDivider, StepperWrapper } from './styled';

type Props = {
  activeStep :number;
  children :ChildrenArray<any>;
  sequential ? :boolean;
  vertical ? :boolean;
};

const Stepper = ({
  activeStep,
  children,
  sequential,
  vertical
} :Props) => {
  const steps = React.Children.map(children, (child, index) => {

    const state = {
      active: activeStep === index,
      complete: sequential && activeStep > index,
      disabled: sequential && activeStep < index,
      index: index + 1,
    };

    return [
      index !== 0 && <StepDivider vertical={vertical} />,
      React.cloneElement(child, { ...state, ...child.props })
    ];
  });

  return (
    <StepperWrapper vertical={vertical}>
      {steps}
    </StepperWrapper>
  );
};

Stepper.defaultProps = {
  vertical: false,
  sequential: false,
};

export default Stepper;
