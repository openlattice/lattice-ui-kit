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
    variant,
    className: clsx(classesObject),
    color: customColor ? 'default' : color,
    disabled: disabled || isLoading,
    startIcon: isLoading ? <Spinner /> : startIcon,
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <MuiButton {...props} />
  );
  /* eslint-enable */
};

export default Button;
