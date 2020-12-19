/*
 * @flow
 */

import React, { useMemo } from 'react';

import clsx from 'clsx';
import styled from 'styled-components';
import { IconButton as MuiIconButton } from '@material-ui/core';

import useButtonStyles, { isCustomColor } from './useButtonStyles';
import type { ButtonProps } from './types';

import Spinner from '../../../spinner';
import { styleName } from '../../../utils/createColorStyles';

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

  > :first-child {
    visibility: ${({ isLoading }) => (isLoading ? 'hidden' : 'visible')};
  }
`;

const SpinnerWrapper = styled.div`
  align-items: center;
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
  forwardRef,
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
    <MuiIconButton {...props} ref={forwardRef}>
      <IconSquareWrapper isLoading={isLoading}>
        {children}
        {
          isLoading && (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )
        }
      </IconSquareWrapper>
    </MuiIconButton>
  );
  /* eslint-enable */
};

/* eslint-disable-next-line react/jsx-props-no-spreading */
export default React.forwardRef<ButtonProps, MuiIconButton>((props, ref) => <IconButton {...props} forwardRef={ref} />);
