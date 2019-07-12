import React from 'react';
import { storiesOf } from '@storybook/react';
import useStepState from './components/useStepState';

import { Stepper, Step } from '..';
import Button from '../../button';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

storiesOf('Stepper', module)
  .add('Horizontal stepper', () => {

    const [currentStep, next, back] = useStepState(steps.length);
    return (
      <>
        <Stepper activeStep={currentStep}>
          { steps.map(title => <Step>{title}</Step>) }
        </Stepper>
        <Button type="button" onClick={back}>Back</Button>
        <Button type="button" onClick={next}>Next</Button>
      </>
    );
  });
