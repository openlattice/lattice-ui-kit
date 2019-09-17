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

const getHoverStyles = (props :{ onClick :() => any }) => {
  const { onClick } = props;
  if (onClick) {
    return css`
      :hover, :focus {
        box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15);
        outline: none;
        cursor: pointer;

        * {
          cursor: inherit;
          pointer-events: auto;
        }
      }

      :active {
        box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.15);
        cursor: pointer;
      }
    `;
  }

  return null;
};

export {
  getStickyPosition,
  getStyleVariation,
  getHoverStyles,
};
