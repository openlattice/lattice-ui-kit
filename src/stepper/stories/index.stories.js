import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import useStepState from './components/useStepState';

import { Stepper, Step } from '..';
import Button from '../../button';
import { Card, CardSegment } from '../../layout';

const ButtonGroup = styled.div`
  button {
    margin-right: 10px;
  }
`;

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

storiesOf('Stepper', module)
  .addDecorator((Story) => {
    const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Story currentStep={currentStep} setStep={setStep} />
          <ButtonGroup>
            <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>Back</Button>
            <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>Next</Button>
            <Button onClick={() => setStep(0)}>Reset</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  })
  .add('Horizontal stepper', ({ currentStep }) => (
    <Stepper activeStep={currentStep}>
      { steps.map(title => <Step key={title}>{title}</Step>) }
    </Stepper>
  ))
  .add('Vertical stepper', ({ currentStep }) => (
    <Stepper activeStep={currentStep} vertical>
      { steps.map(title => <Step key={title}>{title}</Step>) }
    </Stepper>
  ))
  .add('Sequential stepper', ({ currentStep, setStep }) => (
    <Stepper activeStep={currentStep} sequential>
      { steps.map((title, index) => <Step key={title} onClick={() => setStep(index)}>{title}</Step>) }
    </Stepper>
  ))
  .add('onClick', ({ currentStep, setStep }) => (
    <Stepper activeStep={currentStep}>
      { steps.map((title, index) => <Step key={title} onClick={() => setStep(index)}>{title}</Step>) }
    </Stepper>
  ));
