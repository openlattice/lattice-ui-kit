// override mui default
// https://material-ui.com/customization/default-theme/

const fontFamily = "'Inter', 'Arial', sans-serif";

const typography = {
  htmlFontSize: 16,
  fontFamily,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.75rem', // 28px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h2: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h3: {
    fontFamily,
    fontWeight: 600,
    fontSize: '1.375rem', // 22px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h4: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h5: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h6: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  subtitle1: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  subtitle2: {
    fontFamily,
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  body1: {
    fontFamily,
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  body2: {
    fontFamily,
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  caption: {
    fontFamily,
    fontWeight: 400,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  button: {
    fontFamily,
    fontSize: '1rem', // 16px
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  overline: {
    fontFamily,
    fontSize: '0.75rem', // 12px
    fontWeight: 600,
    letterSpacing: '0em',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  }
};

export default typography;
