// @flow
import { useState } from 'react';

function useStepState(maxSteps :number, initialStep :number = 0) {
  const [currentStep, setStep] = useState(initialStep);

  if (
    (initialStep > maxSteps)
    || (initialStep < 0)
  ) {
    throw new Error('initialStep exceeds boundaries');
  }

  const next = () => {
    if (currentStep < maxSteps) {
      setStep(currentStep + 1);
    }
  };

  const back = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  return [currentStep, next, back];
}

export default useStepState;
