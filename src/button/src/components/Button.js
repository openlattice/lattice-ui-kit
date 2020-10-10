// @flow
import React, { useMemo } from 'react';

import clsx from 'clsx';
import { Button as MuiButton } from '@material-ui/core';

import useButtonStyles, { isCustomColor } from './useButtonStyles';
import { styleName } from './createColorStyles';
import type { ButtonProps } from './types';

import Spinner from '../../../spinner';

const Button = ({
  className,
  color = 'default',
  disableElevation = true,
  disabled,
  isLoading,
  startIcon,
  variant = 'contained',
  forwardRef,
  ...rest
} :ButtonProps) => {

  const classes = useButtonStyles();
  const customColor = useMemo(() => isCustomColor(color), [color]);

  // https://medium.com/flow-type/spreads-common-errors-fixes-9701012e9d58
  // [...] you can annotate the object with optional properties and then explicitly set the property afterwards
  const classesObject = {
    [classes[styleName(variant, color)]]: customColor,
  };
  if (className) {
    classesObject[className] = className;
  }

  const props = {
    ...rest,
    disableElevation,
    disableRipple: true,
    variant,
    className: clsx(classesObject),
    color: customColor ? 'default' : color,
    disabled: disabled || isLoading,
    startIcon: isLoading ? <Spinner /> : startIcon,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <MuiButton {...props} ref={forwardRef} />
  );
  /* eslint-enable */
};

/* eslint-disable-next-line react/jsx-props-no-spreading */
export default React.forwardRef<ButtonProps, MuiButton>((props, ref) => <Button {...props} forwardRef={ref} />);
