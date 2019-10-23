import { createMuiTheme } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';

import {
  NEUTRALS,
  PURPLES,
  RED_1,
  WHITE
} from '../../../../colors';
import { duration } from '../../../../style/transitions';

const latticeMuiTheme = createMuiTheme({
  overrides: {
    MuiFormHelperText: {
      root: {
        fontFamily: 'inherit',
        fontSize: '12px',
        '&$error': {
          color: RED_1
        },
      },
      contained: {
        margin: '5px 10px 0'
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: NEUTRALS[8],
        borderRadius: '3px',
        fontFamily: 'inherit',
        fontSize: '14px',
        height: '40px',
        lineHeight: '1.5',
        transition: `background-color ${duration.standard} ease-in-out,
        border-color ${duration.standard} ease-in-out`,
        '&:hover:not($disabled):not($focused):not($error)': {
          backgroundColor: NEUTRALS[6]
        },
        '&$focused:not($disabled)': {
          backgroundColor: WHITE
        },
        '&$disabled': {
          cursor: 'not-allowed'
        }
      },
      input: {
        color: NEUTRALS[0],
        '&$disabled': {
          color: NEUTRALS[1],
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
        border: `1px solid ${NEUTRALS[4]}`,
        '&$focused': {
          borderColor: PURPLES[1],
        },
        '&$error': {
          borderColor: RED_1
        },
      },
      input: {
        padding: '10px'
      },
      notchedOutline: {
        visibility: 'hidden'
      }
    }
  },
  palette: {
    primary: deepPurple
  },
  props: {
    MuiFormControl: {
      fullWidth: true,
      hiddenLabel: true
    },
    MuiOutlinedInput: {
      notched: false
    }
  }
});

export { latticeMuiTheme };
