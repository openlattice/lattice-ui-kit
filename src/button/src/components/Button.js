// @flow
import React, { useMemo } from 'react';

import clsx from 'clsx';
import { Button as MuiButton } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { mergeAll } from 'lodash/fp';
import type { ButtonProps } from '@material-ui/core';

import createColorStyles, { styleName } from './createColorStyles';

import Spinner from '../../../spinner';

// avoid MUI errors from custom color classes
// https://github.com/mui-org/material-ui/issues/13875#issuecomment-625358023

const variants = ['text', 'outlined', 'contained'];
const colors = ['error', 'warning', 'info', 'success'];
const isCustomColor = (color) => colors.includes(color);

const isOutlined = (variant) => variant === variants[1];
const isContained = (variant) => variant === variants[2];

const template = (variant, color, theme) => mergeAll([
  {
    color: theme.palette[color].main
  },
  isContained(variant) && {
    color: theme.palette[color].contrastText,
    backgroundColor: theme.palette[color].main
  },
  isOutlined(variant) && {
    border: '1px solid',
    borderColor: fade(theme.palette[color].main, 0.5)
  },
  {
    '&:hover': mergeAll([
      {
        backgroundColor: fade(
          theme.palette[color].main,
          theme.palette.action.hoverOpacity
        )
      },
      isContained(variant) && {
        backgroundColor: theme.palette[color].dark
      },
      isOutlined(variant) && {
        borderColor: theme.palette[color].main
      },
      {
        // reset on touch devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    ])
  }
]);

// curry global theme to create variant styles
const useStyles = makeStyles(createColorStyles(variants, colors, template));

const Button = (props :ButtonProps) => {
  const {
    children,
    className,
    color = 'default',
    disableElevation = true,
    disabled,
    fullWidth,
    isLoading,
    startIcon,
    variant = 'contained',
    ...rest
  } = props;
  const classes = useStyles();
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
        {...rest}>
      { children }
    </MuiButton>
  );
};

export default Button;
