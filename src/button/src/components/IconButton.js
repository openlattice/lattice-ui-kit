/*
 * @flow
 */

import React, { useMemo } from 'react';

import clsx from 'clsx';
import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@material-ui/core';

import useButtonStyles, { isCustomColor } from './useButtonStyles';
import { styleName } from './createColorStyles';
import type { ButtonProps } from './types';

import Spinner from '../../../spinner';

const IconSquareWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: auto;

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%; /* padding size is relative to the width */
  }
`;

const SpinnerWrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const IconButton = ({
  children,
  className,
  color = 'default',
  disabled = false,
  isLoading = false,
  ...rest
} :ButtonProps) => {

  const classes = useButtonStyles();
  const customColor = useMemo(() => isCustomColor(color), [color]);

  // https://medium.com/flow-type/spreads-common-errors-fixes-9701012e9d58
  // [...] you can annotate the object with optional properties and then explicitly set the property afterwards
  const classesObject = {
    [classes[styleName('text', color)]]: customColor,
  };
  if (className) {
    classesObject[className] = className;
  }

  const props = {
    ...rest,
    className: clsx(classesObject),
    color: customColor ? 'default' : color,
    disabled: disabled || isLoading,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <MuiIconButton {...props}>
      <IconSquareWrapper>
        {
          isLoading && (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )
        }
        {children}
      </IconSquareWrapper>
    </MuiIconButton>
  );
  /* eslint-enable */
};

export default IconButton;
