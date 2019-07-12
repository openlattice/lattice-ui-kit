// @flow

import React from 'react';
import type { ChildrenArray } from 'react';

import StepIcon from './StepIcon';
import { StepWrapper } from './styled';

type Props = {
  index :number;
  active :boolean;
  complete :boolean;
  children :ChildrenArray<any>;
};

const Step = ({
  active,
  complete,
  children,
  index
} :Props) => (
  <StepWrapper>
    <StepIcon
        index={index}
        active={active}
        complete={complete} />
    {children}
  </StepWrapper>
);

export default Step;
