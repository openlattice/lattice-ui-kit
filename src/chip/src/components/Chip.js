// @flow
import React from 'react';

import { Chip as MuiChip, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import Colors from './colors';
import type { ChipProps } from './types';

const DeleteIcon = <FontAwesomeIcon icon={faTimes} />;

const actionStates = (backgroundColor) => ({
  '&:hover, &:focus': {
    backgroundColor
  },
  '&:active': {
    backgroundColor
  },
});

const useStyles = (color) => {
  const colors = Colors[color] || {};
  return makeStyles({
    root: {
      ...colors
    },
    clickable: {
      cursor: 'pointer',
      ...actionStates(colors.clickable)
    },
    deletable: actionStates(colors.background),
    deleteIcon: {
      color: colors.color,
      margin: '0 12px 0 -6px',
    }
  });
};

const Chip = ({
  avatar,
  classes,
  clickable,
  color = 'default',
  component,
  deleteIcon = DeleteIcon,
  disabled,
  icon,
  label,
  onDelete,
  size = 'medium',
  variant = 'default',
  forwardRef,
  ...rest
} :ChipProps) => {
  const styles = useStyles(color)();

  const props :Object = {
    ...rest,
    avatar,
    classes: classes || styles,
    clickable,
    component,
    deleteIcon,
    disabled,
    icon,
    label,
    onDelete,
    size,
    variant,
  };

  if (color === 'default' || color === 'primary' || color === 'secondary') props.color = color;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <MuiChip {...props} ref={forwardRef} />
  );
  /* eslint-enable */
};

/* eslint-disable-next-line react/jsx-props-no-spreading */
export default React.forwardRef<ChipProps, MuiChip>((props, ref) => <Chip {...props} forwardRef={ref} />);
