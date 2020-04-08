/*
 * @flow
 */

import React from 'react';

type Props = {
  color :string;
  size :number;
};

/*
 * Inspiration:
 * https://glennmccomb.com/articles/building-a-pure-css-animated-svg-spinner
 */

const Spinner = ({ color, size } :Props) => (
  <svg
      height={`${size}px`}
      preserveAspectRatio="xMidYMid"
      style={{ display: 'block', shapeRendering: 'auto', margin: '0 auto' }}
      viewBox="0 0 100 100"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg">
    <circle
        cx="50"
        cy="50"
        fill="none"
        r="30"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="5"
        transform="rotate(180 50 50)">
      <animateTransform
          attributeName="transform"
          dur="1.3s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;180 50 50;720 50 50" />
      <animate
          attributeName="stroke-dasharray"
          dur="1.3s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="20 180;150 40;20 180" />
    </circle>
  </svg>
);

Spinner.defaultProps = {
  color: '#4c566a',
  size: 40,
};

export default Spinner;
