import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import useStepState from './components/useStepState';

import { Stepper, Step } from '..';
import Button from '../../button';
import { Card, CardStack, CardSegment } from '../../layout';

const ButtonGroup = styled.div`
  button {
    margin-right: 10px;
  }
`;

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

storiesOf('Stepper', module)
  .add('Horizontal stepper', () => {

    const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Stepper activeStep={currentStep}>
            { steps.map(title => <Step>{title}</Step>) }
          </Stepper>
          <ButtonGroup>
            <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>Back</Button>
            <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>Next</Button>
            <Button onClick={() => setStep(0)}>Reset</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  })
  .add('Vertical stepper', () => {

    const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Stepper activeStep={currentStep} vertical>
            { steps.map(title => <Step>{title}</Step>) }
          </Stepper>
          <ButtonGroup>
            <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>Back</Button>
            <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>Next</Button>
            <Button onClick={() => setStep(0)}>Reset</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  })
  .add('onClick', () => {

    const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
    return (
      <CardStack>
        <Card>
          <CardSegment vertical>
            <Stepper activeStep={currentStep}>
              { steps.map((title, index) => <Step onClick={() => setStep(index)}>{title}</Step>) }
            </Stepper>
          </CardSegment>
        </Card>
        <Card>
          <CardSegment vertical>
            <Stepper activeStep={currentStep} vertical>
              { steps.map((title, index) => <Step onClick={() => setStep(index)}>{title}</Step>) }
            </Stepper>
            <ButtonGroup>
              <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>Back</Button>
              <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>Next</Button>
              <Button onClick={() => setStep(0)}>Reset</Button>
            </ButtonGroup>
          </CardSegment>
        </Card>
      </CardStack>
    );
  })
  .add('Sequential stepper', () => {

    const [currentStep, setStep, nextStep, prevStep] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Stepper activeStep={currentStep} sequential>
            { steps.map((title, index) => <Step onClick={() => setStep(index)}>{title}</Step>) }
          </Stepper>
          <ButtonGroup>
            <Button mode="secondary" disabled={currentStep === 0} onClick={prevStep}>Back</Button>
            <Button mode="primary" disabled={currentStep === steps.length - 1} onClick={nextStep}>Next</Button>
            <Button onClick={() => setStep(0)}>Reset</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  });
