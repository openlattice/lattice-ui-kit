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

const useStyles = (color, size) => {
  const colors = Colors[color] || {};
  return makeStyles({
    root: {
      ...colors
    },
    clickable: {
      cursor: 'pointer',
      ...actionStates(colors.clickable)
    },
    deletable: actionStates(colors.clickable),
    deleteIcon: {
      color: colors.color,
      marginRight: size === 'medium' ? '12px' : '8px',
      '&:hover, &:focus': {
        color: colors.deletable
      },
      '&:active': {
        color: colors.deletable
      },
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
  forwardRef,
  ...rest
} :ChipProps) => {
  const styles = useStyles(color, size)();

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
    variant: 'default'
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
