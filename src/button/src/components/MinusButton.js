/*
 * @flow
 */

import React from 'react';

import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from './IconButton';
import type { Props } from './IconButton';

const icon = (
  <FontAwesomeIcon icon={faMinus} />
);

/* eslint-disable react/jsx-props-no-spreading */
const MinusButton = (props :Props) => (
  <IconButton icon={icon} {...props} />
);
/* eslint-enable */

export default MinusButton;
