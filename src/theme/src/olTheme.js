import { createMuiTheme } from '@material-ui/core/styles';

import { NEUTRALS } from '../../colors';

const theme = createMuiTheme({
  palette: {
    text: {
      primary: NEUTRALS[0],
      secondary: NEUTRALS[1],
      disabled: NEUTRALS[7]
    },
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

export default theme;
