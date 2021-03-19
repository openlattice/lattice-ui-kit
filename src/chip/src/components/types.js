/*
 * @flow
 */

import type { Node } from 'react';

type ChipColor =
  | 'default'
  | 'purple'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'violet';

type ChipSize =
  'medium'
  | 'small';

type ChipVariant =
  | 'default'
  | 'outlined';

type ChipProps = {
  avatar ?:Node;
  classes ?:Object;
  clickable ?:boolean;
  color ?:ChipColor;
  component ?:string;
  deleteIcon ?:Node;
  disabled ?:boolean;
  icon ?:Node;
  label ?:string;
  onDelete ?:Function;
  size ?:ChipSize;
  variant ?:ChipVariant;
  forwardRef ?:any;
};

export type {
  ChipColor,
  ChipProps,
  ChipSize,
  ChipVariant,
};
