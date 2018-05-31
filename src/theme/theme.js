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
      backgroundColor: 'blue',
      '&:hover': {
        backgroundColor: 'black',
      }
    }
  }
}

export default theme;
