// @flow

const getStyleVariation = (prop :string, values :Object) => {
  return (props :Object) :any => {
    return props[prop] && values[props[prop]];
  };
};

export {
  getStyleVariation
};
