/*
 * @flow
 */

import React from 'react';

import { faMinus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from './IconButton';
import type { Props } from './Button';

const icon = (
  <FontAwesomeIcon icon={faMinus} />
);

/* eslint-disable react/jsx-props-no-spreading */
const MinusButton = (props :Props) => (
  <IconButton icon={icon} {...props} />
);
/* eslint-enable */

export default MinusButton;
