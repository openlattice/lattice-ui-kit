import React from 'react';

const withProps = (WrappedComponent, hocProps) => {
  const LatticeWrapper = props => (
    <WrappedComponent {...hocProps} {...props} />
  );
  return LatticeWrapper;
};

export default withProps;
