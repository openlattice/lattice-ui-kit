import { NEUTRAL } from '../../colors';

const getTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    neutral50: NEUTRAL.N700
  },
});

export default getTheme;
