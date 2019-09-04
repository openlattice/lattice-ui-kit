/*
 * @flow
 */

import React from 'react';

import { faMinus } from '@fortawesome/pro-regular-svg-icons';

import IconButton from './IconButton';
import type { Props } from './Button';

/* eslint-disable react/jsx-props-no-spreading */
const MinusButton = (props :Props) => (
  <IconButton icon={faMinus} {...props} />
);
/* eslint-enable */

export default MinusButton;
