const primary = '#7332ff'
const secondary = '#e4d8ff'

const theme = {
  textStyles: {
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
    }
  }
}

export default theme;
