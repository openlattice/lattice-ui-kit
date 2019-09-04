/*
 * @flow
 */

import React from 'react';

import { faPlus } from '@fortawesome/pro-regular-svg-icons';

import IconButton from './IconButton';
import type { Props } from './Button';

/* eslint-disable react/jsx-props-no-spreading */
const PlusButton = (props :Props) => (
  <IconButton icon={faPlus} {...props} />
);
/* eslint-enable */

export default PlusButton;
