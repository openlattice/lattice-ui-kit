// @flow

const getStyleVariation = (prop :string, values :Object, defaultValue ? :any) => {
  return (props :Object) :any => {
    return props[prop] ? values[props[prop]] : defaultValue;
  };
};

export {
  getStyleVariation
};
