import { fade, makeStyles } from '@material-ui/core/styles';
import { mergeAll } from 'lodash/fp';

// avoid MUI errors from custom color classes
// https://github.com/mui-org/material-ui/issues/13875#issuecomment-625358023
import {
  BLUE,
  GREEN,
  NEUTRAL,
  ORANGE,
  PURPLE,
  RED,
} from '../../../colors';
import createColorStyles from './createColorStyles';

const outlinedHoverColors = {
  error: RED.R00,
  info: BLUE.B00,
  primary: PURPLE.P100,
  secondary: PURPLE.P00,
  success: GREEN.G00,
  warning: ORANGE.O00,
};
const outlinedActiveColors = {
  error: RED.R100,
  info: BLUE.B100,
  primary: PURPLE.P200,
  secondary: PURPLE.P100,
  success: GREEN.G100,
  warning: ORANGE.O100,
};
const variants = ['text', 'outlined', 'contained'];
const colors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
export const isCustomColor = (color) => colors.includes(color);

const isText = (variant) => variant === variants[0];
const isOutlined = (variant) => variant === variants[1];
const isContained = (variant) => variant === variants[2];

// Adjustments to colors that are outside of the palette's light, main, dark, & contrastText
const getContrastColor = (color, theme) => ((color === colors[1])
  ? (theme.palette[color].contrastText) : theme.palette[color].main);
const getOutlinedHoverColor = (color) => outlinedHoverColors[color] || NEUTRAL.N50;
const getOutlinedActiveColor = (color) => outlinedActiveColors[color] || NEUTRAL.N200;

const template = (variant, color, theme) => theme.palette[color] && mergeAll([
  {
    color: getContrastColor(color, theme),
  },
  isContained(variant) && {
    backgroundColor: theme.palette[color].main,
    border: '1px solid transparent',
    color: theme.palette[color].contrastText,
  },
  isOutlined(variant) && {
    border: '1px solid',
    borderColor: fade(getContrastColor(color, theme), 0.5),
  },
  {
    '&:hover': mergeAll([
      isContained(variant) && {
        backgroundColor: theme.palette[color].light
      },
      (isOutlined(variant) || isText(variant)) && {
        backgroundColor: getOutlinedHoverColor(color),
        borderColor: 'transparent',
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
      {
        boxShadow: 'none'
      },
      isContained(variant) && {
        backgroundColor: theme.palette[color].dark
      },
      isContained(variant) && (theme.palette[color] && (theme.palette[color].contrastText !== 'white')) && {
        color: 'white',
      },
      (isOutlined(variant) || isText(variant)) && {
        backgroundColor: getOutlinedActiveColor(color),
      }
    ])
  },
  {
    '&:focus': mergeAll([
      {
        boxShadow: `0 0 0 2px ${getContrastColor(color, theme)}`
      },
      isContained(variant) && {
        border: `1px solid ${theme.palette.background.header}`,
      }
    ])
  },
  {
    '&:focus:hover': mergeAll([
      {
        boxShadow: `0 0 0 2px ${getContrastColor(color, theme)}`
      },
      isContained(variant) && {
        border: `1px solid ${theme.palette.background.header}`,
      }
    ])
  }
]);

// curry global theme to create variant styles
const useButtonStyles = makeStyles(createColorStyles(variants, colors, template));

export default useButtonStyles;
