/*
 * @flow
 */

import type { Node } from 'react';

type ButtonColor =
  | 'default'
  | 'error'
  | 'info'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

type ButtonSize =
  | 'large'
  | 'medium'
  | 'small';

type ButtonVariant =
  | 'contained'
  | 'outlined'
  | 'text';

type ButtonProps = {
  children ?:Node;
  className ?:string;
  color ?:ButtonColor;
  disableElevation ?:boolean;
  disabled ?:boolean;
  endIcon ?:Node;
  fullWidth ?:boolean;
  href ?:string;
  isLoading ?:boolean;
  size ?:ButtonSize;
  startIcon ?:Node;
  variant ?:ButtonVariant;
  forwardRef ?:any;
};

export type {
  ButtonColor,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
};
