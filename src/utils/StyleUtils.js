/* eslint-disable arrow-body-style */
// @flow

const getStyleVariation = (prop :string, values :Object) => {
  return (props :Object) :any => {
    return props[prop] && values[props[prop]];
  };
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getStyleVariation
};
