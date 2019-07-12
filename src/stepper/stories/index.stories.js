import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import useStepState from './components/useStepState';

import { Stepper, Step } from '..';
import Button from '../../button';
import { Card, CardSegment } from '../../layout';

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

storiesOf('Stepper', module)
  .add('Horizontal stepper', () => {

    const [currentStep, next, back] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Stepper activeStep={currentStep}>
            { steps.map(title => <Step>{title}</Step>) }
          </Stepper>
          <ButtonGroup>
            <Button type="button" mode="secondary" disabled={currentStep === 0} onClick={back}>Back</Button>
            <Button type="button" mode="primary" disabled={currentStep === steps.length} onClick={next}>Next</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  })
  .add('Vertical stepper', () => {

    const [currentStep, next, back] = useStepState(steps.length);
    return (
      <Card>
        <CardSegment vertical>
          <Stepper activeStep={currentStep} vertical>
            { steps.map(title => <Step>{title}</Step>) }
          </Stepper>
          <ButtonGroup>
            <Button type="button" mode="secondary" disabled={currentStep === 0} onClick={back}>Back</Button>
            <Button type="button" mode="primary" disabled={currentStep === steps.length} onClick={next}>Next</Button>
          </ButtonGroup>
        </CardSegment>
      </Card>
    );
  });
