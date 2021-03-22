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
  | 'medium'
  | 'small';

type ChipProps = {
  avatar ?:Node;
  classes ?:Object;
  clickable ?:boolean;
  color ?:ChipColor;
  component ?:string;
  deleteIcon ?:Node;
  disabled ?:boolean;
  forwardRef ?:any;
  icon ?:Node;
  label ?:string;
  onDelete ?:Function;
  size ?:ChipSize;
};

export type {
  ChipColor,
  ChipProps,
  ChipSize,
};
