// @flow
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';

import clsx from 'clsx';
import { Chip as MuiChip } from '@material-ui/core';

import useChipColorStyles, { isCustomColor } from './useChipColorStyles';

import { styleName } from '../../../utils/createColorStyles';

const Chip = ({
  className,
  color = 'neutral',
  variant = 'default',
  ...rest
}) => {
  const classes = useChipColorStyles();
  const customColor = useMemo(() => isCustomColor(color), [color]);
  const classesObject = {
    [classes[styleName('color', color)]]: customColor,
  };
  if (className) {
    classesObject[className] = className;
  }

  const props = {
    ...rest,
    color,
    variant,
    className: clsx(classesObject),
  };

  return (
    <MuiChip {...props} />
  );
};

export default React.forwardRef<any, MuiChip>((props, ref) => <Chip {...props} forwardRef={ref} />);
