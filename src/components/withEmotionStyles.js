import React, { Component } from 'react';
import emotionStyles from './emotionStyles';

const withEmotionStyles = (WrappedComponent) => {
  class LatticeWrapper extends Component {
    render() {
      return (
        <WrappedComponent
            styles={emotionStyles}
            {...this.props} />
      );
    }
  }

  return LatticeWrapper;
};

export default withEmotionStyles;
