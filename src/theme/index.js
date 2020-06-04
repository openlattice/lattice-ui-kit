import deepPurple from '@material-ui/core/colors/deepPurple';
import { createMuiTheme } from '@material-ui/core/styles';

import {
  NEUTRAL,
  PURPLE,
  RED,
} from '../colors';
import { duration } from '../style/transitions';

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
        backgroundColor: NEUTRAL.N50,
        borderRadius: '3px',
        fontFamily: 'inherit',
        fontSize: '14px',
        height: '40px',
        lineHeight: '1.5',
        transition: `background-color ${duration.standard} ease-out,
        border-color ${duration.standard} ease-out`,
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: NEUTRAL.N100
        },
        '&$focused:not($disabled)': {
          backgroundColor: 'white'
        },
        '&$disabled': {
          cursor: 'not-allowed'
        }
      },
      input: {
        color: NEUTRAL.N700,
        '&$disabled': {
          color: NEUTRAL.N500,
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
        border: `1px solid ${NEUTRAL.N100}`,
        '&$focused': {
          borderColor: PURPLE.P300,
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
        animationDuration: '200ms'
      },
      rippleVisible: {
        animationDuration: '200ms'
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
    primary: deepPurple,
    text: {
      primary: NEUTRAL.N700
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
  }
});

const darkTheme = createMuiTheme({
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
        backgroundColor: '#36353B',
        borderRadius: '3px',
        fontFamily: 'inherit',
        fontSize: '14px',
        height: '40px',
        lineHeight: '1.5',
        transition: `background-color ${duration.standard} ease-out,
        border-color ${duration.standard} ease-out`,
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
      }
    },
    MuiTouchRipple: {
      child: {
        borderRadius: 0,
      },
      childLeaving: {
        animationDuration: '200ms'
      },
      rippleVisible: {
        animationDuration: '200ms'
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
    primary: deepPurple,
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
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      'Open Sans',
      'Arial',
      'sans-serif'
    ].join(','),
    color: 'inherit'
  }
});

export { darkTheme, lightTheme };
