import { createMuiTheme } from '@material-ui/core/styles';

import {
  BLUE,
  GREEN,
  NEUTRAL,
  ORANGE,
  PURPLE,
  RED,
} from '../colors';

const focusAndHoverStylesForOutlinedAndText = {
  border: '1px solid transparent',
  boxShadow: '0 0 0 2px currentColor'
};

const lightTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        fontSize: '16px',
        minHeight: '40px',
        padding: '0 16px',
        textTransform: 'none',
      },
      label: {
        fontWeight: 600,
        lineHeight: 1.2,
      },
      /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},
      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},
      disableElevation: {
        boxShadow: 'none'
      },
      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor',
      },
      /* Styles applied to the root element `variant="text"`. */
      text: {
        border: '1px solid transparent',
        boxShadow: 'none',
        color: NEUTRAL.N700,
        padding: '0 16px',
        '&:active': {
          backgroundColor: NEUTRAL.N200,
        },
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: NEUTRAL.N50,
        },
        '&:focus:hover': focusAndHoverStylesForOutlinedAndText,
        '&:focus': focusAndHoverStylesForOutlinedAndText
      },
      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {
        minHeight: '26px',
        padding: '5px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {
        minHeight: '46px',
        padding: '0 40px',
        fontSize: '18px',
      },
      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {
        minHeight: '26px',
        padding: '4px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {
        minHeight: '46px',
        padding: '0 38px',
        fontSize: '18px',
      },
      contained: {
        backgroundColor: NEUTRAL.N50,
        border: '1px solid transparent',
        boxShadow: 'none',
        color: NEUTRAL.N700,
        '&:active': {
          backgroundColor: NEUTRAL.N500,
          color: 'white'
        },
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus': {
          borderColor: 'white',
          boxShadow: '0 0 0 2px currentColor;'
        },
        '&:focus:hover': {
          borderColor: 'white',
          boxShadow: '0 0 0 2px currentColor;'
        },
      },
      outlined: {
        boxShadow: 'none',
        color: NEUTRAL.N700,
        '&:active': {
          backgroundColor: NEUTRAL.N200,
        },
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: NEUTRAL.N50,
        },
        '&:focus': focusAndHoverStylesForOutlinedAndText,
        '&:focus:hover': focusAndHoverStylesForOutlinedAndText,
      },
      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {
        minHeight: '26px',
        padding: '5px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {
        minHeight: '46px',
        padding: '0 40px',
        fontSize: '18px',
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
    },
    MuiCard: {
      root: {
        overflow: 'visible',
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily: 'inherit',
        fontSize: '12px',
        '&$error': {
          color: RED.R300
        },
      },
      contained: {
        margin: '5px 10px 0'
      },
    },
    MuiInputAdornment: {
      root: {
        color: NEUTRAL.N500,
      },
    },
    MuiInputBase: {
      root: {
        color: NEUTRAL.N900,
        borderRadius: '3px',
        fontFamily: 'inherit',
        fontSize: '14px',
        minHeight: '40px',
        lineHeight: '1.5',
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: NEUTRAL.N100
        },
        '&$disabled': {
          cursor: 'not-allowed',
        }
      },
      input: {
        padding: '10px',
        '&$disabled': {
          color: NEUTRAL.N500,
          cursor: 'not-allowed',
        }
      },
      inputHiddenLabel: {
        padding: 0
      }
    },
    MuiIconButton: {
      root: {
        fontSize: '1rem',
        padding: '10px',
      },
      sizeSmall: {
        fontSize: '0.8rem',
        padding: '6px',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: NEUTRAL.N50,
        border: `1px solid ${NEUTRAL.N50}`,
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: NEUTRAL.N100,
          border: `1px solid ${NEUTRAL.N100}`,
        },
        '&$focused': {
          borderColor: NEUTRAL.N700,
          backgroundColor: NEUTRAL.N00,
        },
        '&$error': {
          borderColor: RED.R300
        },
        '&$disabled': {
          cursor: 'not-allowed',
          backgroundColor: NEUTRAL.N50,
        }
      },
      input: {
        padding: '10px',
        '&$disabled': {
          cursor: 'not-allowed',
          backgroundColor: NEUTRAL.N50,
        }
      },
      multiline: {
        padding: '10px'
      },
      inputHiddenLabel: {
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: 'white',
        border: `1px solid ${NEUTRAL.N100}`,
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: NEUTRAL.N00
        },
        '&$focused': {
          borderColor: NEUTRAL.N700,
          backgroundColor: 'white',
        },
        '&$error': {
          borderColor: RED.R300
        },
        '&.Mui-focused .MuiInputAdornment-root': {
          color: NEUTRAL.N700,
        },
      },
      input: {
        padding: '10px'
      },
      notchedOutline: {
        visibility: 'hidden'
      }
    },
    MuiTouchRipple: {
      childLeaving: {
        animationDuration: '250ms'
      },
      rippleVisible: {
        animationDuration: '250ms'
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(1)',
          opacity: 0.1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3,
        },
      },
    },
    MuiTimelineConnector: {
      root: {
        backgroundColor: NEUTRAL.N200
      },
    },
    MuiTimelineContent: {
      root: {
        padding: '0 16px'
      },
    },
    MuiTimelineDot: {
      root: {
        boxShadow: 'none',
        marginTop: '4px',
        marginBottom: '4px',
      },
      defaultGrey: {
        backgroundColor: NEUTRAL.N200
      },
      outlinedGrey: {
        backgroundColor: NEUTRAL.N200
      }
    },
    MuiTimelineItem: {
      missingOppositeContent: {
        '&:before': {
          display: 'none'
        },
      },
    },
    MuiTimelineOppositeContent: {
      root: {
        padding: '0 16px'
      },
    },
  },
  palette: {
    primary: {
      light: PURPLE.P400,
      main: PURPLE.P300,
      dark: PURPLE.P500,
    },
    secondary: {
      light: PURPLE.P200,
      main: PURPLE.P100,
      dark: PURPLE.P300,
      contrastText: PURPLE.P400,
    },
    success: {
      light: GREEN.G400,
      main: GREEN.G300,
      dark: GREEN.G500,
      contrastText: 'white'
    },
    warning: {
      light: ORANGE.O400,
      main: ORANGE.O300,
      dark: ORANGE.O500,
      contrastText: NEUTRAL.N900
    },
    error: {
      light: RED.R400,
      main: RED.R300,
      dark: RED.R500,
      contrastText: 'white'
    },
    info: {
      light: BLUE.B400,
      main: BLUE.B300,
      dark: BLUE.B500,
      contrastText: 'white'
    },
    text: {
      primary: NEUTRAL.N900,
      secondary: NEUTRAL.N600,
    },
    background: {
      header: NEUTRAL.N50
    },
    divider: NEUTRAL.N100,
  },
  props: {
    MuiFormControl: {
      fullWidth: true,
      hiddenLabel: true
    },
    MuiOutlinedInput: {
      notched: false
    },
    MuiFilledInput: {
      disableUnderline: true
    }
  },
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
  }
});

const darkTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        fontSize: '16px',
        minHeight: '40px',
        padding: '0 16px',
        textTransform: 'none',

        '&$focused': {
          boxShadow: `0 0 0 2px ${NEUTRAL.N700}`
        }
      },
      label: {
        fontWeight: 600,
        lineHeight: 1.2,
      },
      focused: {},
      /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},
      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},
      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor',
      },
      /* Styles applied to the root element `variant="text"`. */
      text: {
        boxShadow: 'none',
        color: NEUTRAL.N50,
        padding: '0 16px',
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus:hover': focusAndHoverStylesForOutlinedAndText,
        '&:focus': focusAndHoverStylesForOutlinedAndText,
      },
      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {
        minHeight: '26px',
        padding: '5px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {
        minHeight: '46px',
        padding: '0 40px',
        fontSize: '18px',
      },
      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {
        minHeight: '26px',
        padding: '4px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {
        minHeight: '46px',
        padding: '0 38px',
        fontSize: '18px',
      },
      contained: {
        backgroundColor: NEUTRAL.N50,
        border: '1px solid transparent',
        boxShadow: 'none',
        color: NEUTRAL.N700,
        '&:active': {
          backgroundColor: NEUTRAL.N500,
          color: 'white'
        },
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus:hover': {
          border: '1px solid currentColor',
          boxShadow: `0 0 0 2px ${NEUTRAL.N50}`
        },
        '&:focus': {
          border: '1px solid currentColor',
          boxShadow: `0 0 0 2px ${NEUTRAL.N50}`
        },
      },
      outlined: {
        boxShadow: 'none',
        color: NEUTRAL.N50,
        '&:hover': {
          boxShadow: 'none',
        },
        '&:focus:hover': focusAndHoverStylesForOutlinedAndText,
        '&:focus': focusAndHoverStylesForOutlinedAndText,
      },
      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {
        minHeight: '26px',
        padding: '5px',
        fontSize: '14px',
      },
      /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {
        minHeight: '46px',
        padding: '0 40px',
        fontSize: '18px',
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
    },
    MuiCard: {
      root: {
        overflow: 'visible',
      },
    },
    MuiFormHelperText: {
      root: {
        fontFamily: 'inherit',
        fontSize: '12px',
        '&$error': {
          color: RED.R300
        },
      },
      contained: {
        margin: '5px 10px 0'
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: '#36353B',
        borderRadius: '3px',
        fontFamily: 'inherit',
        fontSize: '14px',
        minHeight: '40px',
        lineHeight: '1.5',
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: '#4F4E54',
          borderColor: '#4F4E54',
        },
        '&$focused:not($disabled)': {
          backgroundColor: '#4F4E54',
        },
        '&$disabled': {
          cursor: 'not-allowed'
        }
      },
      input: {
        padding: '10px',
        '&$disabled': {
          cursor: 'not-allowed'
        }
      },
      inputHiddenLabel: {
        padding: 0
      }
    },
    MuiIconButton: {
      root: {
        fontSize: '1rem',
        padding: '10px',
      },
      sizeSmall: {
        fontSize: '0.8rem',
        padding: '6px',
      },
    },
    MuiFilledInput: {
      root: {
        border: '1px solid #36353B',
        '&$focused': {
          borderColor: '#98979D',
        },
        '&$error': {
          borderColor: RED.R300
        },
      },
      input: {
        padding: '10px'
      },
      multiline: {
        padding: '10px'
      },
      inputHiddenLabel: {
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
    MuiOutlinedInput: {
      root: {
        border: '1px solid #36353B',
        '&$focused': {
          borderColor: '#98979D',
        },
        '&$error': {
          borderColor: RED.R300
        },
      },
      input: {
        padding: '10px'
      },
      notchedOutline: {
        visibility: 'hidden'
      },
    },
    MuiTouchRipple: {
      child: {
        borderRadius: 0,
      },
      childLeaving: {
        animationDuration: '250ms'
      },
      rippleVisible: {
        animationDuration: '250ms'
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(1)',
          opacity: 0.1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3,
        },
      },
    },
    MuiTimelineConnector: {
      root: {
        backgroundColor: NEUTRAL.N200
      },
    },
    MuiTimelineContent: {
      root: {
        padding: '0 16px'
      },
    },
    MuiTimelineDot: {
      root: {
        boxShadow: 'none',
        marginTop: '4px',
        marginBottom: '4px',
      },
      defaultGrey: {
        backgroundColor: NEUTRAL.N200
      },
      outlinedGrey: {
        backgroundColor: NEUTRAL.N200
      }
    },
    MuiTimelineItem: {
      missingOppositeContent: {
        '&:before': {
          display: 'none'
        },
      },
    },
    MuiTimelineOppositeContent: {
      root: {
        padding: '0 16px'
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      light: PURPLE.P400,
      main: PURPLE.P300,
      dark: PURPLE.P500,
    },
    secondary: {
      light: PURPLE.P200,
      main: PURPLE.P100,
      dark: PURPLE.P300,
      contrastText: PURPLE.P400,
    },
    success: {
      light: GREEN.G400,
      main: GREEN.G300,
      dark: GREEN.G500,
      contrastText: 'white'
    },
    warning: {
      light: ORANGE.O400,
      main: ORANGE.O300,
      dark: ORANGE.O500,
      contrastText: NEUTRAL.N900
    },
    error: {
      light: RED.R400,
      main: RED.R300,
      dark: RED.R500,
      contrastText: 'white'
    },
    info: {
      light: BLUE.B400,
      main: BLUE.B300,
      dark: BLUE.B500,
      contrastText: 'white'
    },
    background: {
      header: '#333'
    },
  },
  props: {
    MuiFormControl: {
      fullWidth: true,
      hiddenLabel: true
    },
    MuiOutlinedInput: {
      notched: false
    },
    MuiFilledInput: {
      disableUnderline: true
    },
  },
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
  }
});

export { darkTheme, lightTheme };
