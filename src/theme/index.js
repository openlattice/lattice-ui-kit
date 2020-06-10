import { createMuiTheme } from '@material-ui/core/styles';

import {
  GREEN,
  NEUTRAL,
  ORANGE,
  PURPLE,
  RED,
} from '../colors';

const lightTheme = createMuiTheme({
  overrides: {
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
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '0 16px',
        minHeight: '40px',
        fontSize: '16px',
      },
    },
    MuiIconButton: {
      root: {
        padding: '5px'
      }
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
      }
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
      },
      input: {
        padding: '10px'
      },
      inputHiddenLabel: {
        paddingTop: 10,
        paddingBottom: 10,
      },
      notchedOutline: {
        visibility: 'hidden'
      }
    },
    MuiTouchRipple: {
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
    }
  },
  palette: {
    primary: {
      main: PURPLE.P300,
      dark: PURPLE.P400,
    },
    secondary: {
      main: PURPLE.P100,
      dark: PURPLE.P200,
      contrastText: PURPLE.P400,
    },
    success: {
      main: GREEN.G300,
      dark: GREEN.G400,
      contrastText: 'white'
    },
    warning: {
      main: ORANGE.O300,
      dark: ORANGE.O400,
      contrastText: 'white'
    },
    error: {
      main: RED.R300,
      dark: RED.R400,
      contrastText: 'white'
    },
    text: {
      primary: NEUTRAL.N900
    },
    background: {
      header: NEUTRAL.N50
    },
    divider: NEUTRAL.N100
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
    fontFamily: [
      'Inter',
      'Arial',
      'sans-serif'
    ].join(','),
    color: 'inherit'
  }
});

const darkTheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '0 16px',
        minHeight: '40px',
        fontSize: '16px',
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
        height: '40px',
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
      }
    },
    MuiIconButton: {
      root: {
        padding: '5px'
      }
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
      notchedOutline: {
        visibility: 'hidden'
      }
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
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: PURPLE.P300,
      dark: PURPLE.P400,
    },
    secondary: {
      main: PURPLE.P100,
      dark: PURPLE.P200,
      contrastText: PURPLE.P400,
    },
    success: {
      main: GREEN.G300,
      dark: GREEN.G400,
      contrastText: 'white'
    },
    warning: {
      main: ORANGE.O300,
      dark: ORANGE.O400,
      contrastText: 'white'
    },
    error: {
      main: RED.R300,
      dark: RED.R400,
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
    fontFamily: [
      'Inter',
      'Arial',
      'sans-serif'
    ].join(','),
    color: 'inherit'
  }
});

export { darkTheme, lightTheme };
