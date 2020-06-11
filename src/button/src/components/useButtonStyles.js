import { fade, makeStyles } from '@material-ui/core/styles';
import { mergeAll } from 'lodash/fp';

// avoid MUI errors from custom color classes
// https://github.com/mui-org/material-ui/issues/13875#issuecomment-625358023
import createColorStyles from './createColorStyles';

const variants = ['text', 'outlined', 'contained'];
const colors = ['error', 'warning', 'info', 'success'];
export const isCustomColor = (color) => colors.includes(color);

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
const useButtonStyles = makeStyles(createColorStyles(variants, colors, template));

export default useButtonStyles;
