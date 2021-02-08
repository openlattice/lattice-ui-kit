import styled from 'styled-components';

import useStepState from './components/useStepState';

import { Button } from '../../button';
import { Card, CardSegment } from '../../layout';
import { Stepper, Step } from '..';

const ButtonGroup = styled.div`
  button {
    margin-right: 10px;
  }
`;

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default {
  title: 'Stepper',

  decorators: [
    (Story) => {
      const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
      return (
        <Card>
          <CardSegment vertical>
            <Story currentStep={currentStep} setStep={setStep} />
            <ButtonGroup>
              <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>
                Back
              </Button>
              <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>
                Next
              </Button>
              <Button onClick={() => setStep(0)}>Reset</Button>
            </ButtonGroup>
          </CardSegment>
        </Card>
      );
    },
  ],
};

export const HorizontalStepper = ({ currentStep }) => (
  <Stepper activeStep={currentStep}>
    {steps.map((title) => (
      <Step key={title}>{title}</Step>
    ))}
  </Stepper>
);

HorizontalStepper.story = {
  name: 'Horizontal stepper',
};

export const VerticalStepper = ({ currentStep }) => (
  <Stepper activeStep={currentStep} vertical>
    {steps.map((title) => (
      <Step key={title}>{title}</Step>
    ))}
  </Stepper>
);

VerticalStepper.story = {
  name: 'Vertical stepper',
};

export const SequentialStepper = ({ currentStep, setStep }) => (
  <Stepper activeStep={currentStep} sequential>
    {steps.map((title, index) => (
      <Step key={title} onClick={() => setStep(index)}>
        {title}
      </Step>
    ))}
  </Stepper>
);

SequentialStepper.story = {
  name: 'Sequential stepper',
};

export const OnClick = ({ currentStep, setStep }) => (
  <Stepper activeStep={currentStep}>
    {steps.map((title, index) => (
      <Step key={title} onClick={() => setStep(index)}>
        {title}
      </Step>
    ))}
  </Stepper>
);

OnClick.story = {
  name: 'onClick',
};
