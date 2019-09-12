/* eslint-disable arrow-body-style */
// @flow

import { css } from 'styled-components';

const getStyleVariation = (prop :string, values :Object) => {
  return (props :Object) :any => {
    return props[prop] && values[props[prop]];
  };
};

const getStickyPosition = (props :{ sticky :boolean }) => {
  const { sticky } = props;
  if (sticky) {
    // WARNING: sticky position does not work in Internet Explorer
    // https://developer.mozilla.org/en-US/docs/Web/CSS/position
    return css`
      position: sticky;
      top: 0;
      z-index: 500;
    `;
  }
  return null;
};

export {
  getStickyPosition,
  getStyleVariation,
};
