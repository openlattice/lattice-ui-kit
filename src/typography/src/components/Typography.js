import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  h1: {
    fontWeight: 600,
    fontSize: '1.75rem', // 28px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h2: {
    fontWeight: 600,
    fontSize: '1.5rem', // 24px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h3: {
    fontWeight: 600,
    fontSize: '1.375rem', // 22px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h4: {
    fontWeight: 500,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h5: {
    fontWeight: 500,
    fontSize: '1.125rem', // 18px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  h6: {
    fontWeight: 500,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  subtitle1: {
    fontWeight: 500,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  body2: {
    fontWeight: 600,
    fontSize: '1rem', // 16px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem', // 12px
    lineHeight: 1.5,
    letterSpacing: '0em',
  },
  button: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    letterSpacing: '0em',
    lineHeight: 1.5,
    textTransform: 'none',
  },
  overline: {
    fontSize: '0.75rem', // 12px
    fontWeight: 600,
    letterSpacing: '0em',
    lineHeight: 1.5,
    textTransform: 'uppercase',
  }
};

export default withStyles(styles)(Typography);
