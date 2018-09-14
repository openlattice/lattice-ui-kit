import React, { Component } from 'react';

const withProps = (WrappedComponent, outerProps) => {
  class LatticeWrapper extends Component {
    render() {
      return (
        <WrappedComponent
          {...outerProps}
          {...this.props} />
      );
    }
  }

  return LatticeWrapper;
};

export default withProps;
