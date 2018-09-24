import React, { Component } from 'react';

const withProps = (WrappedComponent, hocProps) => {
  class LatticeWrapper extends Component {
    render() {
      return (
        <WrappedComponent
          {...hocProps}
          {...this.props} />
      );
    }
  }

  return LatticeWrapper;
};

export default withProps;
