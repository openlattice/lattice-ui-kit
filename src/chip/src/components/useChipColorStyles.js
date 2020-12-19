// @flow
import { fade, makeStyles } from '@material-ui/core/styles';
import { mergeAll } from 'lodash/fp';

import Colors from '../../../colors';
import createColorStyles from '../../../utils/createColorStyles';

const prefix = ['color'];
const colors = [
  'blue',
  'green',
  'magenta',
  'neutral',
  'orange',
  'purple',
  'red',
  'teal',
  'violet',
  'yellow',
];

export const isCustomColor = (color :string) => colors.includes(color);
export const isNeutral = (color :string) => color === 'neutral';

const isOutlined = (variant) => variant === prefix[1];

function template(variant :string, color :string, theme :any) {
  const colorKey = color.toUpperCase();
  let foregroundColor = theme.palette.text.primary;
  let backgroundColor = theme.palette.grey[100];

  const colorPrefix = color[0].toUpperCase();
  if (isCustomColor(color) && !isNeutral(color)) {
    foregroundColor = Colors[colorKey][`${colorPrefix}300`];
    backgroundColor = Colors[colorKey][`${colorPrefix}00`];
  }

  return mergeAll([
    {
      color: foregroundColor,
      backgroundColor,
    },
    isOutlined(variant) && {
      border: '1px solid',
      borderColor: foregroundColor,
    },
  ]);
}

// curry global theme to create variant styles
const useChipColorStyles = makeStyles(createColorStyles(prefix, colors, template));

export default useChipColorStyles;
