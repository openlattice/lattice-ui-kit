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
  onClick ? :(e :SyntheticEvent<HTMLDivElement>) => void;
};

const Step = ({
  active,
  complete,
  children,
  index,
  onClick
} :Props) => (
  <StepWrapper onClick={onClick}>
    <StepIcon
        index={index}
        active={active}
        complete={complete} />
    {children}
  </StepWrapper>
);

Step.defaultProps = {
  onClick: undefined
};

export default Step;
