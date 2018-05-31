const primary = '#7332ff';
const secondary = '#e4d8ff';
const grey = '#f0f0f7';

const theme = {
  colors: {
    primary,
    secondary,
    grey
  },
  textStyles: {
    default: {
      color: '#2e2e34'
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colorStyles: {
    warning: {
      color: 'black',
      backgroundColor: 'orange'
    },
    error: {
      color: 'white',
      backgroundColor: 'red'
    },
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: primary,
    },
    secondary: {
      color: primary,
      backgroundColor: secondary
    },
    warning: {
      color: 'black',
      backgroundColor: 'orange'
    },
    error: {
      color: 'white',
      backgroundColor: 'red'
    },
  }
};

export default theme;
