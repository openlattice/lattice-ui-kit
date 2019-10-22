import { createMuiTheme } from '@material-ui/core';
import deepPurple from '@material-ui/core/colors/deepPurple';

import { NEUTRALS, PURPLES } from '../../../../colors';
import { duration } from '../../../../style/transitions';

const latticeMuiTheme = createMuiTheme({
  overrides: {
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
          backgroundColor: 'white'
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
        '&$focused $notchedOutline': {
          borderColor: PURPLES[1],
          borderWidth: '1px'
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: NEUTRALS[4]
        },
        '&$disabled $notchedOutline': {
          borderColor: NEUTRALS[4]
        }
      },
      input: {
        padding: '10px'
      },
      notchedOutline: {
        borderColor: NEUTRALS[4],
        borderRadius: '3px'
      }
    },
    MuiTextField: {
      root: {
        width: '100%'
      }
    }
  },
  palette: {
    primary: deepPurple
  }
});

export { latticeMuiTheme };
