// @flow

import React from 'react';
import type { ChildrenArray } from 'react';

import StepIcon from './StepIcon';
import { StepWrapper, StepLabel } from './styled';

type Props = {
  active :boolean;
  children :ChildrenArray<any>;
  complete :boolean;
  index :number;
  onClick :(e :SyntheticEvent<HTMLElement>) => void;
};

const Step = (props :Props) => {
  const {
    active,
    children,
    complete,
    index,
    onClick
  } = props;
  return (
    <StepWrapper onClick={onClick}>
      <StepIcon
          active={active}
          complete={complete}
          index={index} />
      <StepLabel active={active}>{children}</StepLabel>
    </StepWrapper>
  );
};

export default Step;
