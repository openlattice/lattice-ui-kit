// @flow
import React from 'react';

import { Button as MuiButton } from '@material-ui/core';
import { fade, withStyles } from '@material-ui/core/styles';
import type { ButtonProps } from '@material-ui/core';

import Spinner from '../../../spinner';
import { NEUTRAL } from '../../../colors';

export const styles = (theme :any) => ({
  root: {},
  /* Styles applied to the span element that wraps the children. */
  label: {
    fontWeight: 600,
    lineHeight: 1.2,
  },
  /* Styles applied to the root element if `variant="text"`. */
  text: {
    padding: '0 16px',
  },
  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="positive"`. */
  textPositive: {
    color: theme.palette.success.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.success.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="negative"`. */
  textNegative: {
    color: theme.palette.error.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="warning"`. */
  textWarning: {
    color: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.warning.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    padding: '0 15px',
    border: `1px solid ${
      theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
    }`,
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabledBackground}`,
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="positive"`. */
  outlinedPositive: {
    color: theme.palette.success.main,
    border: `1px solid ${fade(theme.palette.success.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.success.main}`,
      backgroundColor: fade(theme.palette.success.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="negative"`. */
  outlinedNegative: {
    color: theme.palette.error.main,
    border: `1px solid ${fade(theme.palette.error.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.error.main}`,
      backgroundColor: fade(theme.palette.error.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
  outlinedWarning: {
    color: theme.palette.warning.main,
    border: `1px solid ${fade(theme.palette.warning.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.warning.main}`,
      backgroundColor: fade(theme.palette.warning.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  },
  /* Styles applied to the root element if `variant="contained"`. */
  contained: {
    padding: '0 16px',
    backgroundColor: NEUTRAL.N50,
    boxShadow: 'none',
    color: NEUTRAL.N700,
    '&:hover': {
      backgroundColor: NEUTRAL.N100,
      boxShadow: 'none',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: 'none',
        backgroundColor: NEUTRAL.N50,
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    '&$focusVisible': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      boxShadow: 'none',
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
  containedPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  containedPositive: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.success.main,
      },
    },
  },
  containedNegative: {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.error.main,
      },
    },
  },
  containedWarning: {
    color: theme.palette.warning.contrastText,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.warning.main,
      },
    },
  },
  /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit',
    borderColor: 'currentColor',
  },
  /* Styles applied to the root element if `size="small"` and `variant="text"`. */
  textSizeSmall: {
    padding: '5px',
    fontSize: theme.typography.pxToRem(14),
  },
  /* Styles applied to the root element if `size="large"` and `variant="text"`. */
  textSizeLarge: {
    minHeight: '46px',
    padding: '0 40px',
    fontSize: theme.typography.pxToRem(18),
  },
  /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
  outlinedSizeSmall: {
    minHeight: '26px',
    padding: '4px',
    fontSize: theme.typography.pxToRem(14),
  },
  /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
  outlinedSizeLarge: {
    minHeight: '46px',
    padding: '0 38px',
    fontSize: theme.typography.pxToRem(18),
  },
  /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
  containedSizeSmall: {
    minHeight: '26px',
    padding: '5px',
    fontSize: theme.typography.pxToRem(14),
  },
  /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
  containedSizeLarge: {
    minHeight: '46px',
    padding: '0 40px',
    fontSize: theme.typography.pxToRem(18),
  },
  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    minWidth: '26px',
  },
  /* Styles applied to the root element if `size="large"`. */
  sizeLarge: {
    minWidth: '26px',
  },
  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%',
  },
  /* Styles applied to the startIcon element if supplied. */
  startIcon: {
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    '&$iconSizeSmall': {
      marginLeft: -2,
    },
  },
  /* Styles applied to the endIcon element if supplied. */
  endIcon: {
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    '&$iconSizeSmall': {
      marginRight: -2,
    },
  },
  /* Styles applied to the icon element if supplied and `size="small"`. */
  iconSizeSmall: {
    '& > *:first-child': {
      fontSize: 'inherit',
    },
  },
  /* Styles applied to the icon element if supplied and `size="medium"`. */
  iconSizeMedium: {
    '& > *:first-child': {
      fontSize: 'inherit',
    },
  },
  /* Styles applied to the icon element if supplied and `size="large"`. */
  iconSizeLarge: {
    '& > *:first-child': {
      fontSize: 'inherit',
    },
  },
});

const StyledButton = withStyles(styles, { name: 'Button' })(MuiButton);

StyledButton.defaultProps = {
  variant: 'contained',
};

const Button = (props :ButtonProps) => {
  const {
    children,
    disabled,
    isLoading,
    startIcon,
    ...rest
  } = props;
  return (
    <StyledButton
        {...rest}
        disabled={(disabled || isLoading)}
        startIcon={isLoading ? <Spinner /> : startIcon}>
      { children }
    </StyledButton>
  );
};

export default Button;

// export type {
//   ButtonMode,
//   Props,
// };
