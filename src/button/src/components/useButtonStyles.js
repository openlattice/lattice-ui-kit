import { fade, makeStyles } from '@material-ui/core/styles';
import { mergeAll } from 'lodash/fp';

// avoid MUI errors from custom color classes
// https://github.com/mui-org/material-ui/issues/13875#issuecomment-625358023
import { NEUTRAL } from '../../../colors';
import createColorStyles from './createColorStyles';

const variants = ['text', 'outlined', 'contained'];
const colors = ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'];
export const isCustomColor = (color) => colors.includes(color);

const isOutlined = (variant) => variant === variants[1];
const isContained = (variant) => variant === variants[2];

const getOutlineColor = (color, theme) => (color === colors[0] || color === colors[2])
  ? theme.palette[color].contrastText : theme.palette[color].main;

const template = (variant, color, theme) => mergeAll([
  {
    color: theme.palette[color].main
  },
  isContained(variant) && {
    backgroundColor: theme.palette[color].main,
    border: '1px solid transparent',
    color: theme.palette[color].contrastText,
    '&:focus': {
        border: '1px solid white',
        boxShadow: `0 0 0 2px ${getOutlineColor(color, theme)}`
    },
  },
  isOutlined(variant) && {
    border: '1px solid',
    borderColor: fade(getOutlineColor(color, theme), 0.5),
    color: getOutlineColor(color, theme),
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
  },
  {
    '&:active': mergeAll([
      isContained(variant) && (theme.palette[color] && (theme.palette[color].contrastText !== 'white')) && {
        color: 'white'
      }
    ])
  }
]);

// curry global theme to create variant styles
const useButtonStyles = makeStyles(createColorStyles(variants, colors, template));

export default useButtonStyles;
