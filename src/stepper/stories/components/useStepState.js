// @flow
import { useState } from 'react';

function useStepState(maxSteps :number, initialStep :number = 0) {
  const [currentStep, setStep] = useState<number>(initialStep);

  if (
    (initialStep > maxSteps)
    || (initialStep < 0)
  ) {
    throw new Error('initialStep exceeds boundaries');
  }

  const nextStep = () => {
    if (currentStep < maxSteps - 1) {
      setStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  return [currentStep, setStep, nextStep, prevStep];
}

export default useStepState;
