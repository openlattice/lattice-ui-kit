// @flow
import React, { useMemo } from 'react';

import clsx from 'clsx';
import { Button as MuiButton } from '@material-ui/core';
import type { ButtonProps } from '@material-ui/core';

import useButtonStyles, { isCustomColor } from './useButtonStyles';
import { styleName } from './createColorStyles';

import Spinner from '../../../spinner';

const Button = (props :ButtonProps) => {
  const {
    className,
    color = 'default',
    disableElevation = true,
    disabled,
    isLoading,
    startIcon,
    variant = 'contained',
    ...rest
  } = props;
  const classes = useButtonStyles();
  const customColor = useMemo(() => isCustomColor(color), [color]);
  return (
    <MuiButton
        className={clsx({
          [className]: className,
          [classes[styleName(variant, color)]]: customColor,
        })}
        color={customColor ? 'default' : color}
        disableElevation={disableElevation}
        variant={variant}
        disabled={(disabled || isLoading)}
        startIcon={isLoading ? <Spinner /> : startIcon}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest} />
  );
};

export default Button;
