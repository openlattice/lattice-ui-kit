/*
 * @flow
 */

import React from 'react';

import { faPlus } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconButton from './IconButton';
import type { Props } from './Button';

const icon = (
  <FontAwesomeIcon icon={faPlus} />
);

/* eslint-disable react/jsx-props-no-spreading */
const PlusButton = (props :Props) => (
  <IconButton icon={icon} {...props} />
);
/* eslint-enable */

export default PlusButton;
