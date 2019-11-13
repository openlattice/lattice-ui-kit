// @flow
/* eslint-disable arrow-body-style */

import { css } from 'styled-components';

const getStyleVariation = (key :string, values :Object, defaultValue :any) => {
  return (props :Object) :any => {
    return (props[key] && values[props[key]]) || defaultValue;
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
      z-index: 200;
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

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// https://www.styled-components.com/docs/advanced#media-templates
// font-size: 16
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...styles :any) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...styles)}
    }
  `;

  return acc;
}, {});


export {
  getHoverStyles,
  getStickyPosition,
  getStyleVariation,
  media,
};
